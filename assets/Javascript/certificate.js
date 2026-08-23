/* =============================================
   HEY YOUTH! — Certificate Search & PDF Download
   ============================================= */

var currentCertificate = null;

function initCertificateSearch() {
  const searchForm = document.getElementById('certificate-search-form');
  const previewSection = document.getElementById('certificate-preview-section');
  const errorMsg = document.getElementById('c-error-msg');
  const errorText = document.getElementById('c-error-text');
  const submitBtn = document.getElementById('c-submit-btn');
  const btnText = document.getElementById('c-btn-text');
  const spinner = document.getElementById('c-btn-spinner');
  const canvas = document.getElementById('cert-canvas');

  if (!searchForm) return;

  const tabEmail = document.getElementById('search-type-email');
  const tabPhone = document.getElementById('search-type-phone');
  const inputLabel = document.getElementById('search-input-label');
  const inputIcon = document.getElementById('search-input-icon');
  const inputField = document.getElementById('c-email');

  var activeSearchType = 'email';

  if (tabEmail && tabPhone) {
    tabEmail.addEventListener('click', function () {
      activeSearchType = 'email';
      tabEmail.className = 'flex-1 py-2 text-xs font-bold rounded-lg bg-white dark:bg-slate-800 text-primary dark:text-blue-400 shadow-sm transition-all';
      tabPhone.className = 'flex-1 py-2 text-xs font-bold rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition-all';
      inputLabel.textContent = 'Email';
      inputIcon.innerHTML = '<i class="fas fa-envelope text-sm"></i>';
      inputField.type = 'email';
      inputField.placeholder = 'johndoe@email.com';
      inputField.value = '';
      errorMsg.classList.add('hidden');
    });

    tabPhone.addEventListener('click', function () {
      activeSearchType = 'phone';
      tabPhone.className = 'flex-1 py-2 text-xs font-bold rounded-lg bg-white dark:bg-slate-800 text-primary dark:text-blue-400 shadow-sm transition-all';
      tabEmail.className = 'flex-1 py-2 text-xs font-bold rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 transition-all';
      inputLabel.innerHTML = localStorage.getItem('heyyouth_lang') === 'id' ? 'Nomor HP / WhatsApp' : 'Phone / WhatsApp Number';
      inputIcon.innerHTML = '<i class="fas fa-phone-alt text-sm"></i>';
      inputField.type = 'text';
      inputField.placeholder = localStorage.getItem('heyyouth_lang') === 'id' ? 'contoh: 08123456789' : 'e.g. 08123456789';
      inputField.value = '';
      errorMsg.classList.add('hidden');
    });
  }

  function cleanPhone(num) {
    if (!num) return '';
    var cleaned = String(num).replace(/\D/g, '');
    if (cleaned.startsWith('62')) {
      cleaned = '0' + cleaned.substring(2);
    }
    return cleaned;
  }

  searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const queryVal = inputField.value.trim();
    errorMsg.classList.add('hidden');
    previewSection.classList.add('hidden');
    if (!queryVal) return;

    submitBtn.disabled = true;
    spinner.classList.remove('hidden');
    btnText.textContent = localStorage.getItem('heyyouth_lang') === 'id' ? 'Mencari...' : 'Searching...';

    try {
      let query = supabase.from('certificates').select('*');
      if (activeSearchType === 'email') {
        query = query.ilike('email', queryVal);
      } else {
        var searchPhone = cleanPhone(queryVal);
        query = query.or(`phone.eq.${searchPhone},phone.eq.${queryVal}`);
      }

      const { data: resData, error: resError } = await query;
      if (resError) throw resError;

      var found = null;
      if (resData && resData.length > 0) {
        var c = resData[0];
        found = {
          id: String(c.id),
          data: {
            email: c.email,
            phone: c.phone,
            name: c.name,
            role: c.role,
            eventName: c.event_name,
            issueDate: c.issue_date,
            certificateNumber: c.certificate_number,
            description: c.description
          }
        };
      }

      // Fetch all certificate emails for suggested matches fallback
      const { data: allCerts } = await supabase.from('certificates').select('email');
      var list = (allCerts || []).map(function(c) {
        return { data: { email: c.email } };
      });

      submitBtn.disabled = false;
      spinner.classList.add('hidden');
      btnText.textContent = localStorage.getItem('heyyouth_lang') === 'id' ? 'Cari Sertifikat' : 'Search Certificate';

      if (!found) {
        if (activeSearchType === 'email') {
          function getLevenshteinDistance(a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a.length === 0) return b.length;
            if (b.length === 0) return a.length;
            var matrix = [];
            for (var i = 0; i <= b.length; i++) { matrix[i] = [i]; }
            for (var j = 0; j <= a.length; j++) { matrix[0][j] = j; }
            for (var i = 1; i <= b.length; i++) {
              for (var j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                  matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                  matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                  );
                }
              }
            }
            return matrix[b.length][a.length];
          }

          var bestMatch = null;
          var minDistance = 999;
          list.forEach(function (itemObj) {
            if (itemObj.data && itemObj.data.email) {
              var dist = getLevenshteinDistance(queryVal, itemObj.data.email);
              if (dist < minDistance) {
                minDistance = dist;
                bestMatch = itemObj.data.email;
              }
            }
          });

          window.useSuggestedEmail = function(suggestedEmail) {
            document.getElementById('c-email').value = suggestedEmail;
            document.getElementById('certificate-search-form').dispatchEvent(new Event('submit'));
          };

          if (minDistance <= 3 && bestMatch) {
            errorText.innerHTML = localStorage.getItem('heyyouth_lang') === 'id' ?
              'Email tidak ditemukan. Apakah maksud Anda: <a href="#" onclick="useSuggestedEmail(\'' + bestMatch + '\'); return false;" class="underline font-bold text-blue-600 dark:text-blue-400">' + bestMatch + '</a>?' :
              'Email not found. Did you mean: <a href="#" onclick="useSuggestedEmail(\'' + bestMatch + '\'); return false;" class="underline font-bold text-blue-600 dark:text-blue-400">' + bestMatch + '</a>?';
          } else {
            errorText.textContent = localStorage.getItem('heyyouth_lang') === 'id' ?
              'Maaf, email Anda tidak terdaftar untuk e-sertifikat mana pun. Coba cari dengan: peserta@heyyouth.org' :
              'Sorry, your email is not registered for any e-certificate. Try search with: peserta@heyyouth.org';
          }
        } else {
          errorText.textContent = localStorage.getItem('heyyouth_lang') === 'id' ?
            'Maaf, nomor HP/WhatsApp Anda tidak terdaftar untuk e-sertifikat mana pun.' :
            'Sorry, your phone number is not registered for any e-certificate.';
        }
        errorMsg.classList.remove('hidden');
        return;
      }

      const certDoc = found.data;
      currentCertificate = certDoc;
      drawCertificate(canvas, certDoc);

      const lkBtn = document.getElementById('c-linkedin-btn');
      if (lkBtn) {
        lkBtn.href = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(certDoc.eventName + ' (' + (certDoc.role || 'Participant') + ')')}&organizationName=Hey%20Youth!&certId=${encodeURIComponent(certDoc.certificateNumber || '')}&issueYear=2026&issueMonth=7`;
      }

      previewSection.classList.remove('hidden');
    } catch (err) {
      console.error("Search certificate error:", err);
      submitBtn.disabled = false;
      spinner.classList.add('hidden');
      btnText.textContent = localStorage.getItem('heyyouth_lang') === 'id' ? 'Cari Sertifikat' : 'Search Certificate';
      errorText.textContent = localStorage.getItem('heyyouth_lang') === 'id' ?
        'Gagal melakukan pencarian. Silakan coba kembali.' :
        'Failed to search. Please try again.';
      errorMsg.classList.remove('hidden');
    }
  });
}
function rR(ctx,x,y,w,h,r){r=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath()}

async function drawCertificate(canvas, cert) {
  let settings = null;
  try {
    const { data } = await supabase.from('certificate_settings').select('*').eq('event_name', cert.eventName).single();
    settings = data;
    if (!settings) {
      const { data: fallbackData } = await supabase.from('certificate_settings').select('*').eq('event_name', '-- DEFAULT LAYOUT --').single();
      settings = fallbackData;
    }
  } catch(e) {
    console.warn("Fallback to static certificate design:", e);
  }

  // If a custom cloud layout is saved, render it dynamically
  if (settings && settings.template_image && settings.layout_json && Array.isArray(settings.layout_json) && settings.layout_json.length > 0) {
     const cw = 1123;
     const ch = 794;
     const scale = 2; // high-quality export resolution
     canvas.width = cw * scale;
     canvas.height = ch * scale;
     const ctx = canvas.getContext('2d');
     ctx.scale(scale, scale);
     
     // Wait for all custom fonts in the layout to load
      if (document.fonts) {
          try {
              const fontFamilies = [...new Set(settings.layout_json.filter(e => e.type === 'text' && e.fontFamily).map(e => {
                  return e.fontFamily.replace(/['"]/g, '').split(',')[0].trim();
              }))];
              await Promise.all(fontFamilies.map(font => document.fonts.load(`20px "${font}"`)));
          } catch (e) {
              console.warn("Gagal memuat font dinamis:", e);
          }
      }

     ctx.fillStyle = '#ffffff';
     ctx.fillRect(0, 0, cw, ch);

     // Wait for image background to load
     await new Promise((resolve) => {
         const img = new Image();
         img.crossOrigin = "anonymous";
         img.onload = () => {
             ctx.drawImage(img, 0, 0, cw, ch);
             resolve();
         };
         img.onerror = () => {
             console.error("Gagal memuat template gambar latar sertifikat.");
             resolve();
         };
         img.src = settings.template_image;
     });

     // Render all elements sequentially
     const elements = settings.layout_json;
     const tasks = [];
     
     elements.filter(e => e.visible !== false).forEach(el => {
         tasks.push(new Promise((res) => {
             // Map data binding roles
             let textVal = el.text || '';
             if (el.role === 'recipient') textVal = cert.name;
             else if (el.role === 'event') textVal = cert.eventName;
             else if (el.role === 'desc_full') textVal = cert.description;
             else if (el.role === 'date') textVal = cert.issueDate;

             // Dynamic replacements
             textVal = textVal.replace(/\[\s*Nama Penerima\s*\]/gi, cert.name)
                              .replace(/\[\s*Nama Acara\s*\]/gi, cert.eventName)
                              .replace(/\[\s*Nomor Sertifikat\s*\]/gi, cert.certificateNumber || '')
                              .replace(/\[\s*Tanggal\s*\]/gi, cert.issueDate);

             if (el.type === 'text') {
                 ctx.save();
                 ctx.globalAlpha = el.opacity;
                 ctx.translate(el.x + el.width/2, el.y + el.height/2);
                 ctx.rotate((el.rotation || 0) * Math.PI / 180);
                 ctx.translate(-(el.x + el.width/2), -(el.y + el.height/2));
                 
                 let fontStyle = '';
                 if (el.italic) fontStyle += 'italic ';
                 if (el.bold) fontStyle += 'bold ';
                 fontStyle += el.fontSize + 'px ' + el.fontFamily;
                 
                 ctx.font = fontStyle;
                 ctx.fillStyle = el.color;
                 ctx.textAlign = el.textAlign || 'left';
                 ctx.textBaseline = 'top';
                 
                 if (el.bgColor && el.bgColor !== 'transparent') {
                     ctx.fillStyle = el.bgColor;
                     ctx.fillRect(el.x, el.y, el.width, el.height);
                     ctx.fillStyle = el.color;
                 }
                 
                 const txt = el.uppercase ? textVal.toUpperCase() : textVal;
                 const lines = txt.split('\n');
                 let yp = el.y + 4;
                 const lh = (el.lineHeight || 1.3) * el.fontSize;
                 const ls = parseFloat(el.letterSpacing) || 0;
                 
                 lines.forEach(line => {
                     if (ls === 0) {
                         let xp = el.x;
                         if (el.textAlign === 'center') xp = el.x + el.width / 2;
                         else if (el.textAlign === 'right') xp = el.x + el.width;
                         ctx.fillText(line, xp, yp, el.width);
                     } else {
                         const mw = ctx.measureText(line).width + ls * Math.max(0, line.length - 1);
                         let xp;
                         if (ctx.textAlign === 'center') xp = el.x + el.width/2 - mw/2;
                         else if (ctx.textAlign === 'right') xp = el.x + el.width - mw;
                         else xp = el.x;
                         
                         ctx.textAlign = 'left';
                         for (const char of line) {
                             ctx.fillText(char, xp, yp);
                             xp += ctx.measureText(char).width + ls;
                         }
                     }
                     yp += lh;
                 });
                 
                 if (el.underline) {
                     ctx.strokeStyle = el.color;
                     ctx.lineWidth = Math.max(1, el.fontSize / 16);
                     ctx.beginPath();
                     ctx.moveTo(el.x + 8, yp);
                     ctx.lineTo(el.x + el.width - 8, yp);
                     ctx.stroke();
                 }
                 ctx.restore();
                 res();
             } else if (el.type === 'image') {
                 const i = new Image();
                 i.crossOrigin = "anonymous";
                 i.onload = () => {
                     ctx.save();
                     ctx.globalAlpha = el.opacity;
                     ctx.translate(el.x + el.width/2, el.y + el.height/2);
                     ctx.rotate((el.rotation || 0) * Math.PI / 180);
                     ctx.translate(-(el.x + el.width/2), -(el.y + el.height/2));
                     
                     if (el.borderRadius > 0) {
                         rR(ctx, el.x, el.y, el.width, el.height, el.borderRadius);
                         ctx.clip();
                     }
                     if (el.borderWidth > 0) {
                         ctx.strokeStyle = el.borderColor;
                         ctx.lineWidth = el.borderWidth;
                         rR(ctx, el.x, el.y, el.width, el.height, el.borderRadius);
                         ctx.stroke();
                     }
                     ctx.drawImage(i, el.x, el.y, el.width, el.height);
                     ctx.restore();
                     res();
                 };
                 i.onerror = res;
                 i.src = el.src;
             } else if (el.type === 'shape') {
                 ctx.save();
                 ctx.globalAlpha = el.opacity;
                 ctx.translate(el.x + el.width/2, el.y + el.height/2);
                 ctx.rotate((el.rotation || 0) * Math.PI / 180);
                 ctx.translate(-(el.x + el.width/2), -(el.y + el.height/2));
                 ctx.fillStyle = el.color;
                 const s = el.shapeType || 'rectangle';
                 
                 if (s === 'circle') {
                     ctx.beginPath();
                     ctx.ellipse(el.x + el.width/2, el.y + el.height/2, el.width/2, el.height/2, 0, 0, Math.PI * 2);
                     ctx.fill();
                     if (el.borderWidth > 0) {
                         ctx.strokeStyle = el.borderColor;
                         ctx.lineWidth = el.borderWidth;
                         ctx.stroke();
                     }
                 } else if (s === 'diamond') {
                     ctx.beginPath();
                     ctx.moveTo(el.x + el.width/2, el.y);
                     ctx.lineTo(el.x + el.width, el.y + el.height/2);
                     ctx.lineTo(el.x + el.width/2, el.y + el.height);
                     ctx.lineTo(el.x, el.y + el.height/2);
                     ctx.closePath();
                     ctx.fill();
                     if (el.borderWidth > 0) {
                         ctx.strokeStyle = el.borderColor;
                         ctx.lineWidth = el.borderWidth;
                         ctx.stroke();
                     }
                 } else if (s === 'triangle') {
                     ctx.beginPath();
                     ctx.moveTo(el.x + el.width/2, el.y);
                     ctx.lineTo(el.x + el.width, el.y + el.height);
                     ctx.lineTo(el.x, el.y + el.height);
                     ctx.closePath();
                     ctx.fill();
                     if (el.borderWidth > 0) {
                         ctx.strokeStyle = el.borderColor;
                         ctx.lineWidth = el.borderWidth;
                         ctx.stroke();
                     }
                 } else {
                     if (el.borderRadius > 0) {
                         rR(ctx, el.x, el.y, el.width, el.height, el.borderRadius);
                         ctx.fill();
                         if (el.borderWidth > 0) {
                             ctx.strokeStyle = el.borderColor;
                             ctx.lineWidth = el.borderWidth;
                             ctx.stroke();
                         }
                     } else {
                         ctx.fillRect(el.x, el.y, el.width, el.height);
                         if (el.borderWidth > 0) {
                             ctx.strokeStyle = el.borderColor;
                             ctx.lineWidth = el.borderWidth;
                             ctx.strokeRect(el.x, el.y, el.width, el.height);
                         }
                     }
                 }
                 ctx.restore();
                 res();
             } else if (el.type === 'line') {
                 ctx.save();
                 ctx.globalAlpha = el.opacity;
                 ctx.translate(el.x + el.width/2, el.y);
                 ctx.rotate((el.rotation || 0) * Math.PI / 180);
                 ctx.translate(-(el.x + el.width/2), -el.y);
                 ctx.strokeStyle = el.color;
                 const lw = el.lineWidth || 2, ls = el.lineStyle || 'solid';
                 
                 if (ls === 'double') {
                     ctx.lineWidth = Math.max(1, lw/2);
                     ctx.beginPath();
                     ctx.moveTo(el.x, el.y - 2);
                     ctx.lineTo(el.x + el.width, el.y - 2);
                     ctx.stroke();
                     ctx.beginPath();
                     ctx.moveTo(el.x, el.y + 2);
                     ctx.lineTo(el.x + el.width, el.y + 2);
                     ctx.stroke();
                 } else {
                     if (ls === 'dashed') ctx.setLineDash([10, 6]);
                     else if (ls === 'dotted') ctx.setLineDash([3, 4]);
                     else ctx.setLineDash([]);
                     ctx.lineWidth = lw;
                     ctx.beginPath();
                     ctx.moveTo(el.x, el.y);
                     ctx.lineTo(el.x + el.width, el.y);
                     ctx.stroke();
                 }
                 ctx.restore();
                 res();
             } else {
                 res();
             }
         }));
     });
     
     await Promise.all(tasks);
     return;
  }

  // Fallback to legacy static drawing route
  var layout = {
    nameX: 400, nameY: 290,
    descX: 400, descY: 345,
    dateX: 400, dateY: null,
    numX: 45, numY: 525
  };

  const scale = 3;
  canvas.width = 800 * scale;
  canvas.height = 565 * scale;

  const ctx = canvas.getContext('2d');

  if (document.fonts) {
    try {
      await document.fonts.load('30px "Great Vibes"');
      await document.fonts.load('12px "Inter"');
    } catch (e) {
      console.warn("Gagal memuat font secara dinamis:", e);
    }
  }

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function () {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#b5892c';
    ctx.textAlign = 'center';
    ctx.font = (42 * scale) + 'px "Great Vibes", cursive';
    ctx.fillText(cert.name, layout.nameX * scale, layout.nameY * scale);

    function wrapRichText(context, text, x, y, maxWidth, lineHeight) {
      var segments = text.split('**');
      var tokens = [];
      for (var i = 0; i < segments.length; i++) {
        var isBold = (i % 2 === 1);
        var segmentText = segments[i];
        var words = segmentText.split(' ');
        for (var j = 0; j < words.length; j++) {
          var wordStr = words[j];
          var spacer = (j < words.length - 1) ? ' ' : '';
          if (wordStr || spacer) {
            tokens.push({
              text: wordStr + spacer,
              isBold: isBold
            });
          }
        }
      }

      var lines = [];
      var currentLine = [];
      var currentLineWidth = 0;

      var normalFont = (12.5 * scale) + 'px "Inter", sans-serif';
      var boldFont = 'bold ' + (12.5 * scale) + 'px "Inter", sans-serif';

      for (var k = 0; k < tokens.length; k++) {
        var token = tokens[k];
        context.font = token.isBold ? boldFont : normalFont;
        var tokenWidth = context.measureText(token.text).width;

        if (currentLineWidth + tokenWidth > maxWidth && currentLine.length > 0) {
          lines.push({ tokens: currentLine, width: currentLineWidth });
          currentLine = [token];
          currentLineWidth = tokenWidth;
        } else {
          currentLine.push(token);
          currentLineWidth += tokenWidth;
        }
      }
      if (currentLine.length > 0) {
        lines.push({ tokens: currentLine, width: currentLineWidth });
      }

      var currentY = y;
      for (var m = 0; m < lines.length; m++) {
        var lineObj = lines[m];
        var startX = x - (lineObj.width / 2);

        for (var n = 0; n < lineObj.tokens.length; n++) {
          var tok = lineObj.tokens[n];
          context.font = tok.isBold ? boldFont : normalFont;
          context.textAlign = 'left';
          context.fillText(tok.text, startX, currentY);
          startX += context.measureText(tok.text).width;
        }
        currentY += lineHeight;
      }
      return currentY - lineHeight;
    }

    var defaultDesc = 'In recognition of your active participation in the **Hey Youth: Future Ready Summit themed "What Makes You Irreplaceable in the AI Era."** Your participation has contributed to the success of this event, and we hope the knowledge and insights gained will inspire your continued growth and impact.';
    var certDesc = cert.description || defaultDesc;

    ctx.fillStyle = '#475569';
    var descY = layout.descY * scale;
    var finalDescY = wrapRichText(ctx, certDesc, layout.descX * scale, descY, 560 * scale, 18 * scale);

    ctx.fillStyle = '#334155';
    ctx.textAlign = 'center';
    ctx.font = 'bold ' + (12 * scale) + 'px "Inter", sans-serif';
    var targetDateY = layout.dateY ? (layout.dateY * scale) : (finalDescY + 28 * scale);
    ctx.fillText(cert.issueDate, layout.dateX * scale, targetDateY);

    ctx.fillStyle = '#94A3B8';
    ctx.font = (10 * scale) + 'px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('ID: ' + (cert.certificateNumber || 'HY-N/A'), layout.numX * scale, layout.numY * scale);
  };
  img.src = 'assets/img/Certificate-Template.webp?v=' + Date.now();
}

window.downloadCertificatePDF = function () {
  if (!currentCertificate) return;
  const { jsPDF } = window.jspdf;
  const canvas = document.getElementById('cert-canvas');
  // Determine scale factor based on canvas resolution to match pixel layout to paper size
  const scale = canvas.width > 2000 ? 2 : 3;
  const w = canvas.width / scale;
  const h = canvas.height / scale;
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [w, h]
  });
  const imgData = canvas.toDataURL('image/jpeg', 1.0);
  pdf.addImage(imgData, 'JPEG', 0, 0, w, h);
  pdf.save('Certificate-' + currentCertificate.name.replace(/\s+/g, '_') + '.pdf');
};

window.downloadCertificatePNG = function () {
  if (!currentCertificate) return;
  const canvas = document.getElementById('cert-canvas');
  const link = document.createElement('a');
  link.download = 'Certificate-' + currentCertificate.name.replace(/\s+/g, '_') + '.png';
  link.href = canvas.toDataURL('image/png', 1.0);
  link.click();
};
