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

  searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('c-email').value.trim();
    errorMsg.classList.add('hidden');
    previewSection.classList.add('hidden');
    if (!email) return;

    submitBtn.disabled = true;
    spinner.classList.remove('hidden');
    btnText.textContent = localStorage.getItem('heyyouth_lang') === 'id' ? 'Mencari...' : 'Searching...';

    try {
      var listKey = 'mock_fb_list_certificates';
      if (localStorage.getItem(listKey) === null) {
        var list = [
          {
            id: "1",
            data: {
              email: 'peserta@heyyouth.org',
              name: 'Budi Santoso',
              role: 'Participant',
              eventName: 'HeyYouth Digital Summit 2026',
              issueDate: '18 Juli 2026',
              certificateNumber: 'HY-DS26-0001',
              description: 'as a **Participant** in the online webinar **HeyYouth Digital Summit 2026**'
            }
          },
          {
            id: "2",
            data: {
              email: 'speaker@heyyouth.org',
              name: 'Jane Doe',
              role: 'Speaker',
              eventName: 'HeyYouth Digital Summit 2026',
              issueDate: '18 Juli 2026',
              certificateNumber: 'HY-DS26-0002',
              description: 'as a **Speaker** in the online webinar **HeyYouth Digital Summit 2026**'
            }
          },
          {
            id: "3",
            data: {
              email: 'henriprasetyo6@gmail.com',
              name: 'Henri Prasetyo',
              role: 'Participant',
              eventName: 'Hey Youth Summit 2026',
              issueDate: 'July 22nd - 23rd, 2026',
              certificateNumber: 'HY-REG-014838',
              description: 'in recognition of your active participation in the **Hey Youth: Future Ready Summit** themed **"What Makes You Irreplaceable in the AI Era."**'
            }
          }
        ];
        localStorage.setItem(listKey, JSON.stringify(list));
      }
      var list = JSON.parse(localStorage.getItem(listKey) || '[]');
      var found = list.find(function (itemObj) {
        return itemObj.data && itemObj.data.email.toLowerCase() === email.toLowerCase();
      });

      submitBtn.disabled = false;
      spinner.classList.add('hidden');
      btnText.textContent = localStorage.getItem('heyyouth_lang') === 'id' ? 'Cari Sertifikat' : 'Search Certificate';

      if (!found) {
        errorText.textContent = localStorage.getItem('heyyouth_lang') === 'id' ?
          'Maaf, email Anda tidak terdaftar untuk e-sertifikat mana pun. Coba cari dengan: peserta@heyyouth.org' :
          'Sorry, your email is not registered for any e-certificate. Try search with: peserta@heyyouth.org';
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

async function drawCertificate(canvas, cert) {
  // Set resolusi canvas ke HD (3x dari 800x565) agar tidak pecah/blur
  const scale = 3;
  canvas.width = 800 * scale;
  canvas.height = 565 * scale;

  const ctx = canvas.getContext('2d');

  // Pastikan font "Great Vibes" dan "Inter" sudah terunduh sebelum menggambar
  if (document.fonts) {
    try {
      await document.fonts.load('30px "Great Vibes"');
      await document.fonts.load('12px "Inter"');
    } catch (e) {
      console.warn("Gagal memuat font secara dinamis:", e);
    }
  }

  const img = new Image();
  img.onload = function () {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 1. Nama Penerima (Kaligrafi Latin Emas/Gold)
    ctx.fillStyle = '#b5892c'; // Warna emas elegan
    ctx.textAlign = 'center';
    ctx.font = (42 * scale) + 'px "Great Vibes", cursive';
    ctx.fillText(cert.name, 400 * scale, 290 * scale);

    // Helper untuk membungkus teks deskripsi panjang menjadi beberapa baris (Mendukung Bold dengan **)
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

    // 2. Deskripsi Sertifikat (Dinamis dari CMS, mendukung ** untuk cetak tebal)
    var defaultDesc = 'In recognition of your active participation in the **Hey Youth: Future Ready Summit themed "What Makes You Irreplaceable in the AI Era."** Your participation has contributed to the success of this event, and we hope the knowledge and insights gained will inspire your continued growth and impact.';
    var certDesc = cert.description || defaultDesc;

    ctx.fillStyle = '#475569'; // Slate dark gray
    var descY = 345 * scale;
    var finalDescY = wrapRichText(ctx, certDesc, 400 * scale, descY, 560 * scale, 18 * scale);

    // 3. Tanggal Rilis (Di bawah teks deskripsi secara proporsional)
    ctx.fillStyle = '#334155';
    ctx.textAlign = 'center';
    ctx.font = 'bold ' + (12 * scale) + 'px "Inter", sans-serif';
    ctx.fillText(cert.issueDate, 400 * scale, (finalDescY + 28 * scale));

    // 4. Nomor Sertifikat / ID (Sudut Bawah Kiri)
    ctx.fillStyle = '#94A3B8';
    ctx.font = (10 * scale) + 'px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('ID: ' + (cert.certificateNumber || 'HY-N/A'), 45 * scale, 525 * scale);
  };
  // Gunakan cache buster (?v=timestamp) agar browser memuat ulang file template baru yang baru ditimpa
  img.src = 'assets/img/Certificate-Template.webp?v=' + Date.now();
}

window.downloadCertificatePDF = function () {
  if (!currentCertificate) return;
  const { jsPDF } = window.jspdf;
  // Bikin ukuran PDF tetap proporsional [800, 565]
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [800, 565]
  });
  const canvas = document.getElementById('cert-canvas');
  // Gambar dari canvas HD (2400x1695) diekspor dengan kualitas tinggi 1.0
  const imgData = canvas.toDataURL('image/jpeg', 1.0);
  pdf.addImage(imgData, 'JPEG', 0, 0, 800, 565);
  pdf.save('Certificate-' + currentCertificate.name.replace(/\s+/g, '_') + '.pdf');
};
