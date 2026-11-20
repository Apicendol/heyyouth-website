(function (root, factory) {
  var api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FieldStoryInteractions = api;
})(typeof window !== 'undefined' ? window : null, function (root) {
  var MAX_CLAPS = 50;
  var NAME_LIMIT = 80;
  var COMMENT_LIMIT = 1000;
  var BLOCKED_WORDS = ['fuck', 'shit', 'bitch', 'asshole', 'bajingan', 'kontol', 'memek', 'ngentot'];
  var CLIENT_STORAGE_KEY = 'heyYouth:fieldStories:client:v1';
  var active = null;
  var generation = 0;
  var cachedClientId = null;

  function characterCount(value) {
    return Array.from(value).length;
  }

  function containsProhibitedLanguage(value) {
    var text = String(value || '').toLowerCase();
    return BLOCKED_WORDS.some(function (word) {
      var letters = word.split('').map(function (letter) {
        return letter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      });
      var separators = '[\\p{P}\\p{Z}\\s]{0,2}';
      var pattern = letters.join(separators);
      var expression = new RegExp('(^|[^\\p{L}\\p{N}])' + pattern + '($|[^\\p{L}\\p{N}])', 'u');
      return expression.test(text);
    });
  }

  function validateComment(authorName, commentText) {
    var name = String(authorName || '').trim();
    var comment = String(commentText || '').trim();

    if (!name) return { valid: false, field: 'name', reason: 'name-required' };
    if (characterCount(name) > NAME_LIMIT) return { valid: false, field: 'name', reason: 'name-too-long' };
    if (!comment) return { valid: false, field: 'comment', reason: 'comment-required' };
    if (characterCount(comment) > COMMENT_LIMIT) return { valid: false, field: 'comment', reason: 'comment-too-long' };
    if (containsProhibitedLanguage(comment)) return { valid: false, field: 'comment', reason: 'prohibited-language' };

    return { valid: true, authorName: name, commentText: comment };
  }

  function isValidClientId(value) {
    return typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
  }

  function storyStorageKey(purpose, storyId) {
    return 'heyYouth:fieldStories:' + purpose + ':v1:' + String(storyId);
  }

  function getStorageValue(key) {
    try {
      return root && root.localStorage ? root.localStorage.getItem(key) : null;
    } catch (error) {
      return null;
    }
  }

  function setStorageValue(key, value) {
    try {
      if (!root || !root.localStorage) return false;
      root.localStorage.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  }

  function removeStorageValue(key) {
    try {
      if (root && root.localStorage) root.localStorage.removeItem(key);
    } catch (error) {
      // Storage is an optional client-side convenience.
    }
  }

  function createUuid() {
    if (!root || !root.crypto) return null;
    if (typeof root.crypto.randomUUID === 'function') return root.crypto.randomUUID();
    if (typeof root.crypto.getRandomValues !== 'function') return null;

    var bytes = new Uint8Array(16);
    root.crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    var hex = Array.from(bytes, function (byte) {
      return byte.toString(16).padStart(2, '0');
    }).join('');
    return hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-' + hex.slice(12, 16) + '-' + hex.slice(16, 20) + '-' + hex.slice(20);
  }

  function getClientId() {
    if (cachedClientId) return cachedClientId;
    var stored = getStorageValue(CLIENT_STORAGE_KEY);
    if (isValidClientId(stored)) {
      cachedClientId = stored;
      return cachedClientId;
    }

    cachedClientId = createUuid();
    if (cachedClientId) setStorageValue(CLIENT_STORAGE_KEY, cachedClientId);
    return cachedClientId;
  }

  function supabaseClient() {
    return root && (root.supabaseClient || root.supabase);
  }

  function isIndonesian() {
    if (!root || !root.document) return false;
    return root.document.body.classList.contains('lang-id') ||
      (!root.document.body.classList.contains('lang-en') && getStorageValue('heyyouth_lang') === 'id');
  }

  function localized(indonesian, english) {
    return isIndonesian() ? indonesian : english;
  }

  function getElement(id) {
    return root && root.document ? root.document.getElementById(id) : null;
  }

  function setCount(id, value) {
    var element = getElement(id);
    if (!element) return;
    var count = Number(value);
    element.textContent = Number.isFinite(count) && count >= 0 ? count.toLocaleString() : '—';
  }

  function setStatus(id, status, indonesian, english) {
    var element = getElement(id);
    if (!element) return;
    element.textContent = localized(indonesian, english);
    element.classList.toggle('text-red-600', status === 'error');
    element.classList.toggle('text-green-700', status === 'success');
    element.classList.toggle('text-gray-500', status === 'neutral');
  }

  function localClapsUsed(storyId, clientId) {
    var stored = getStorageValue(storyStorageKey('claps-' + clientId, storyId));
    if (stored === null || !/^\d+$/.test(stored)) return 0;
    var count = Number(stored);
    return Number.isInteger(count) ? Math.min(MAX_CLAPS, count) : 0;
  }

  function getClapStatus(clapsUsed, justAdded) {
    if (Number(clapsUsed) >= MAX_CLAPS) {
      return {
        status: 'neutral',
        indonesian: 'Batas 50 tepuk tangan untuk cerita ini telah tercapai.',
        english: 'The 50-Clap limit for this story has been reached.'
      };
    }

    if (justAdded) {
      return {
        status: 'success',
        indonesian: 'Tepuk tangan berhasil dikirim.',
        english: 'Your Clap was added.'
      };
    }

    return { status: 'neutral', indonesian: '', english: '' };
  }

  function setReactionButtons() {
    if (!active) return;
    var clapButton = getElement('story-claps-button');
    var loveButton = getElement('story-loves-button');
    if (clapButton) {
      clapButton.disabled = !active.ready || active.clapsSaving || active.clapsUsed >= MAX_CLAPS;
    }
    if (loveButton) {
      loveButton.disabled = !active.ready || active.loveSaving || active.loved;
      loveButton.setAttribute('aria-pressed', String(active.loved));
    }
  }

  function displayStoryCounts(story) {
    setCount('story-claps-count', story && story.claps_count);
    setCount('story-loves-count', story && story.loves_count);
  }

  function renderComments(comments) {
    var list = getElement('story-comments-list');
    if (!list) return;
    list.replaceChildren();

    if (!comments.length) {
      var empty = root.document.createElement('p');
      empty.className = 'text-sm text-gray-500 dark:text-slate-400';
      empty.textContent = localized('Belum ada komentar dukungan yang disetujui.', 'No approved support comments yet.');
      list.appendChild(empty);
      return;
    }

    comments.forEach(function (comment) {
      var item = root.document.createElement('article');
      item.className = 'story-comment-card rounded-2xl border border-gray-100 dark:border-slate-800 bg-gray-50 p-4';

      var header = root.document.createElement('div');
      header.className = 'story-comment-meta flex flex-wrap items-baseline justify-between gap-y-1 mb-2';

      var author = root.document.createElement('h5');
      author.className = 'font-bold text-sm text-heading dark:text-white';
      author.textContent = String(comment.author_name || '');
      header.appendChild(author);

      if (comment.created_at) {
        var date = root.document.createElement('time');
        var parsedDate = new Date(comment.created_at);
        if (!Number.isNaN(parsedDate.getTime())) {
          date.dateTime = parsedDate.toISOString();
          date.className = 'text-xs text-gray-400';
          date.textContent = parsedDate.toLocaleDateString(isIndonesian() ? 'id-ID' : 'en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });
          header.appendChild(date);
        }
      }

      var body = root.document.createElement('p');
      body.className = 'story-comment-body text-sm leading-relaxed text-body dark:text-slate-300 whitespace-pre-wrap';
      body.textContent = String(comment.comment_text || '');
      item.appendChild(header);
      item.appendChild(body);
      list.appendChild(item);
    });
  }

  async function loadComments(storyId, currentGeneration) {
    var client = supabaseClient();
    var list = getElement('story-comments-list');
    if (!client || !list) {
      setStatus('story-comments-status', 'error', 'Komentar belum dapat dimuat.', 'Comments could not be loaded.');
      return;
    }

    list.replaceChildren();
    setStatus('story-comments-status', 'neutral', 'Memuat komentar...', 'Loading comments...');
    try {
      var response = await client.from('story_comments')
        .select('id,author_name,comment_text,created_at')
        .eq('story_id', storyId)
        .eq('is_approved', true)
        .order('created_at', { ascending: true })
        .order('id', { ascending: true })
        .limit(50);
      if (currentGeneration !== generation) return;
      if (response.error) throw response.error;
      var comments = response.data || [];
      renderComments(comments);
      setStatus('story-comments-status', 'neutral', '', '');
    } catch (error) {
      if (currentGeneration !== generation) return;
      list.replaceChildren();
      setStatus('story-comments-status', 'error', 'Komentar tidak dapat dimuat. Coba lagi nanti.', 'Comments could not be loaded. Please try again later.');
    }
  }

  function readRpcRow(data) {
    return Array.isArray(data) ? data[0] : data;
  }

  async function loadReactionState(story, clientId, currentGeneration) {
    var client = supabaseClient();
    if (!client || !clientId) {
      throw new Error('Reaction service unavailable');
    }

    var response = await client.rpc('get_story_interaction_state', {
      p_story_id: story.id,
      p_client_fingerprint: clientId
    });
    if (currentGeneration !== generation) return;
    if (response.error) throw response.error;
    var result = readRpcRow(response.data);
    if (!result) throw new Error('Story not found');

    active.clapsCount = Number(result.claps_count);
    active.lovesCount = Number(result.loves_count);
    active.clapsUsed = Math.max(Number(result.claps_used), localClapsUsed(story.id, clientId));
    active.loved = result.loved === true;
    if (![active.clapsCount, active.lovesCount, active.clapsUsed].every(Number.isFinite)) {
      throw new Error('Invalid reaction state');
    }
    active.ready = true;
    setCount('story-claps-count', active.clapsCount);
    setCount('story-loves-count', active.lovesCount);
    setStorageValue(storyStorageKey('claps-' + clientId, story.id), String(active.clapsUsed));
    var clapStatus = getClapStatus(active.clapsUsed);
    setStatus('story-reaction-status', clapStatus.status, clapStatus.indonesian, clapStatus.english);
    setReactionButtons();
  }

  function beginLoading(story) {
    generation += 1;
    var currentGeneration = generation;
    var storyId = String(story && story.id || '');
    if (!/^[1-9]\d*$/.test(storyId)) {
      active = null;
      setStatus('story-reaction-status', 'error', 'Cerita ini belum memiliki ID yang valid.', 'This story does not have a valid ID.');
      setStatus('story-comments-status', 'error', 'Komentar tidak dapat dimuat.', 'Comments could not be loaded.');
      return;
    }

    active = {
      storyId: storyId,
      clientId: getClientId(),
      ready: false,
      clapsSaving: false,
      loveSaving: false,
      commentSaving: false,
      clapsUsed: 0,
      clapsCount: Number(story.claps_count),
      lovesCount: Number(story.loves_count),
      loved: false,
      pendingClapRequestId: getStorageValue(storyStorageKey('pending-clap', storyId))
    };
    if (!isValidClientId(active.pendingClapRequestId)) active.pendingClapRequestId = null;

    displayStoryCounts(story);
    setStatus('story-reaction-status', 'neutral', 'Memuat reaksi...', 'Loading reactions...');
    setStatus('story-comments-status', 'neutral', 'Memuat komentar...', 'Loading comments...');
    var commentInput = getElement('story-comment-text');
    var commentSubmit = getElement('story-comment-submit');
    if (commentInput) {
      commentInput.placeholder = localized('Tulis komentar dukungan Anda...', 'Write a supportive comment...');
    }
    if (commentSubmit) commentSubmit.disabled = false;
    setReactionButtons();
    bindEvents();

    loadComments(storyId, currentGeneration);
    loadReactionState(story, active.clientId, currentGeneration).catch(function () {
      if (currentGeneration !== generation) return;
      setStatus('story-reaction-status', 'error', 'Reaksi belum tersedia. Coba lagi nanti.', 'Reactions are unavailable. Please try again later.');
      setReactionButtons();
    });
  }

  function getOrCreateClapRequestId(current) {
    if (isValidClientId(current.pendingClapRequestId)) return current.pendingClapRequestId;
    var requestId = createUuid();
    if (!requestId) return null;
    current.pendingClapRequestId = requestId;
    setStorageValue(storyStorageKey('pending-clap', current.storyId), requestId);
    return requestId;
  }

  async function submitClap() {
    var current = active;
    var client = supabaseClient();
    if (!current || !current.ready || current.clapsSaving || current.clapsUsed >= MAX_CLAPS || !client) return;

    var requestId = getOrCreateClapRequestId(current);
    if (!requestId) {
      setStatus('story-reaction-status', 'error', 'Perangkat ini tidak mendukung ID reaksi yang aman.', 'This device cannot create a secure reaction ID.');
      return;
    }

    current.clapsSaving = true;
    setStatus('story-reaction-status', 'neutral', 'Menyimpan tepuk tangan...', 'Saving your Clap...');
    setReactionButtons();
    try {
      var response = await client.rpc('increment_story_claps', {
        p_story_id: current.storyId,
        p_client_fingerprint: current.clientId,
        p_request_id: requestId
      });
      if (active !== current) return;
      if (response.error) throw response.error;
      var result = readRpcRow(response.data);
      if (!result) throw new Error('No reaction result');

      if (result.status === 'limit_reached') {
        current.clapsCount = Number(result.claps_count);
        current.clapsUsed = Number(result.claps_used);
        setCount('story-claps-count', current.clapsCount);
        setStorageValue(storyStorageKey('claps-' + current.clientId, current.storyId), String(current.clapsUsed));
        removeStorageValue(storyStorageKey('pending-clap', current.storyId));
        current.pendingClapRequestId = null;
        var limitStatus = getClapStatus(current.clapsUsed);
        setStatus('story-reaction-status', limitStatus.status, limitStatus.indonesian, limitStatus.english);
        return;
      }
      if (result.status !== 'recorded') throw new Error('Reaction was not recorded');

      current.clapsCount = Number(result.claps_count);
      current.clapsUsed = Number(result.claps_used);
      if (!Number.isFinite(current.clapsCount) || !Number.isFinite(current.clapsUsed)) throw new Error('Invalid reaction result');
      setCount('story-claps-count', current.clapsCount);
      setStorageValue(storyStorageKey('claps-' + current.clientId, current.storyId), String(current.clapsUsed));
      removeStorageValue(storyStorageKey('pending-clap', current.storyId));
      current.pendingClapRequestId = null;
      var clapStatus = getClapStatus(current.clapsUsed, true);
      setStatus('story-reaction-status', clapStatus.status, clapStatus.indonesian, clapStatus.english);
    } catch (error) {
      if (active === current) {
        setStatus('story-reaction-status', 'error', 'Tepuk tangan gagal dikirim. Silakan coba lagi.', 'Your Clap could not be saved. Please try again.');
      }
    } finally {
      current.clapsSaving = false;
      if (active === current) setReactionButtons();
    }
  }

  async function submitLove() {
    var current = active;
    var client = supabaseClient();
    if (!current || !current.ready || current.loveSaving || current.loved || !client) return;

    current.loveSaving = true;
    setStatus('story-reaction-status', 'neutral', 'Menyimpan cinta...', 'Saving your Love...');
    setReactionButtons();
    try {
      var response = await client.rpc('record_story_love', {
        p_story_id: current.storyId,
        p_client_fingerprint: current.clientId
      });
      if (active !== current) return;
      if (response.error) throw response.error;
      var result = readRpcRow(response.data);
      if (!result || !['loved', 'already_loved'].includes(result.status)) throw new Error('Reaction was not recorded');
      current.lovesCount = Number(result.loves_count);
      current.loved = result.loved === true;
      if (!Number.isFinite(current.lovesCount)) throw new Error('Invalid reaction result');
      setCount('story-loves-count', current.lovesCount);
      setStatus('story-reaction-status', 'success', 'Dukungan cinta berhasil dikirim.', 'Your Love was added.');
    } catch (error) {
      if (active === current) {
        setStatus('story-reaction-status', 'error', 'Dukungan cinta gagal dikirim. Silakan coba lagi.', 'Your Love could not be saved. Please try again.');
      }
    } finally {
      current.loveSaving = false;
      if (active === current) setReactionButtons();
    }
  }

  function setCommentFieldError(field, hasError) {
    var element = getElement(field === 'name' ? 'story-comment-name' : 'story-comment-text');
    if (!element) return;
    element.setAttribute('aria-invalid', String(hasError));
    element.classList.toggle('border-red-500', hasError);
  }

  async function submitComment(event) {
    event.preventDefault();
    var current = active;
    var client = supabaseClient();
    var nameInput = getElement('story-comment-name');
    var commentInput = getElement('story-comment-text');
    var submitButton = getElement('story-comment-submit');
    if (!current || current.commentSaving || !client || !nameInput || !commentInput) return;

    var validation = validateComment(nameInput.value, commentInput.value);
    setCommentFieldError('name', validation.field === 'name');
    setCommentFieldError('comment', validation.field === 'comment');
    if (!validation.valid) {
      var messages = {
        'name-required': ['Nama wajib diisi.', 'Please enter your name.'],
        'name-too-long': ['Nama maksimal 80 karakter.', 'Names must be 80 characters or fewer.'],
        'comment-required': ['Komentar wajib diisi.', 'Please enter a comment.'],
        'comment-too-long': ['Komentar maksimal 1.000 karakter.', 'Comments must be 1,000 characters or fewer.'],
        'prohibited-language': ['Komentar mengandung kata yang tidak diperbolehkan.', 'Please remove language that is not allowed.']
      };
      var message = messages[validation.reason];
      setStatus('story-comment-status', 'error', message[0], message[1]);
      var invalidInput = validation.field === 'name' ? nameInput : commentInput;
      invalidInput.focus();
      return;
    }

    current.commentSaving = true;
    if (submitButton) submitButton.disabled = true;
    setStatus('story-comment-status', 'neutral', 'Mengirim komentar...', 'Submitting your comment...');
    try {
      var response = await client.rpc('submit_story_comment', {
        p_story_id: current.storyId,
        p_author_name: validation.authorName,
        p_comment_text: validation.commentText
      });
      if (response.error) throw response.error;
      var result = readRpcRow(response.data);
      if (!result || result.status !== 'submitted') throw new Error('Comment was not submitted');
      if (active === current) {
        nameInput.value = '';
        commentInput.value = '';
        setCommentFieldError('name', false);
        setCommentFieldError('comment', false);
        setStatus('story-comment-status', 'success', 'Komentar diterima dan menunggu persetujuan moderator.', 'Comment received. It will appear after moderation.');
      }
    } catch (error) {
      if (active === current) {
        setStatus('story-comment-status', 'error', 'Komentar gagal dikirim. Periksa koneksi lalu coba lagi.', 'Your comment could not be sent. Check your connection and try again.');
      }
    } finally {
      current.commentSaving = false;
      if (active === current && submitButton) submitButton.disabled = false;
    }
  }

  function bindEvents() {
    var clapButton = getElement('story-claps-button');
    var loveButton = getElement('story-loves-button');
    var commentForm = getElement('story-comment-form');
    if (clapButton && clapButton.dataset.fieldStoriesBound !== 'true') {
      clapButton.dataset.fieldStoriesBound = 'true';
      clapButton.addEventListener('click', submitClap);
    }
    if (loveButton && loveButton.dataset.fieldStoriesBound !== 'true') {
      loveButton.dataset.fieldStoriesBound = 'true';
      loveButton.addEventListener('click', submitLove);
    }
    if (commentForm && commentForm.dataset.fieldStoriesBound !== 'true') {
      commentForm.dataset.fieldStoriesBound = 'true';
      commentForm.addEventListener('submit', submitComment);
    }
  }

  function load(story) {
    if (!root || !root.document) return;
    beginLoading(story);
  }

  function close() {
    generation += 1;
    active = null;
  }

  return {
    MAX_CLAPS: MAX_CLAPS,
    containsProhibitedLanguage: containsProhibitedLanguage,
    getClapStatus: getClapStatus,
    isValidClientId: isValidClientId,
    load: load,
    close: close,
    storyStorageKey: storyStorageKey,
    validateComment: validateComment
  };
});
