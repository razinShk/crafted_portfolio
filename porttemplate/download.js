function downloadAsPDF() {
 const element = document.querySelector('.container.inside');
 const options = {
  margin: 10,
  filename: 'portfolio-content.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
 };

 html2pdf().set(options).from(element).save();
}

function downloadAsWord() {
 const element = document.querySelector('.container.inside');
 const content = element.innerText;
 const styles = getComputedStyle(element);

 const doc = new docx.Document({
  sections: [{
   properties: {},
   children: [
    new docx.Paragraph({
     children: [
      new docx.TextRun({
       text: "Portfolio Content",
       bold: true,
       size: 24,
      }),
     ],
    }),
    new docx.Paragraph({
     children: [
      new docx.TextRun({
       text: content,
       size: parseInt(styles.fontSize),
       font: styles.fontFamily,
      }),
     ],
    }),
   ],
  }],
 });

 docx.Packer.toBlob(doc).then(blob => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolio-content.docx';
  a.click();
  URL.revokeObjectURL(url);
 });
}

function getStyles(element) {
 let styles = '';
 const computedStyle = window.getComputedStyle(element);
 for (let i = 0; i < computedStyle.length; i++) {
  const prop = computedStyle[i];
  const value = computedStyle.getPropertyValue(prop);
  styles += `${prop}: ${value};\n`;
 }
 return styles;
}