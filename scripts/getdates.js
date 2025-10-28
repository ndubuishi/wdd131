document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("currentyear");
  const lastModifiedElement = document.getElementById("lastModified");
  if (yearElement) yearElement.textContent = new Date().getFullYear().toString();
  if (lastModifiedElement) lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
});