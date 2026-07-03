// ─────────────────────────────────────────────────────────────
// Edit your company links here. Reorder, add, or remove objects.
// ─────────────────────────────────────────────────────────────
const links = [
  { name: "WhatsApp 咨询", url: "https://wa.me/message/UJAXWQRQR5H3B1", icon: "fa-brands fa-whatsapp", color: "#25D366", social: true },
  { name: "Facebook Page", url: "https://www.facebook.com/sdscFlooringWall/", icon: "fa-brands fa-facebook-f", color: "#1877F2", social: true },
  { name: "Instagram", url: "https://www.instagram.com/sdsc_shuchang/", icon: "fa-brands fa-instagram", color: "#E4405F", social: true },
  { name: "TikTok", url: "https://www.tiktok.com/@spc.floor2", icon: "fa-brands fa-tiktok", color: "#111111", social: true },
  { name: "YouTube", url: "https://www.youtube.com/@DocorationDesign", icon: "fa-brands fa-youtube", color: "#FF0000", social: true },
  { name: "Shopee Store", url: "https://shopee.com.my/shuchang_spcfloor", icon: "fa-solid fa-bag-shopping", color: "#EE4D2D", social: true },
  { name: "Facebook 古晋", url: "https://www.facebook.com/sdscdesign/", icon: "fa-brands fa-facebook-f", color: "#1877F2" },
  { name: "Instagram 古晋", url: "https://www.instagram.com/sdscwallhub/", icon: "fa-brands fa-instagram", color: "#E4405F" },
  { name: "TikTok 古晋", url: "https://www.tiktok.com/@shuchang0808", icon: "fa-brands fa-tiktok", color: "#111111" }
];

const socialLinks = document.querySelector("#social-links");
const mainLinks = document.querySelector("#main-links");

function isExternalLink(url) {
  return url.startsWith("http://") || url.startsWith("https://");
}

function linkAttributes(url) {
  return isExternalLink(url) ? 'target="_blank" rel="noopener noreferrer"' : "";
}

function renderSocialLinks() {
  socialLinks.innerHTML = links
    .filter((link) => link.social)
    .map((link) => `
      <a class="social-link" href="${link.url}" ${linkAttributes(link.url)}
         aria-label="${link.name}" title="${link.name}" data-name="${link.name}">
        <i class="${link.icon}" aria-hidden="true"></i>
      </a>
    `)
    .join("");
}

function renderMainLinks() {
  mainLinks.innerHTML = links
    .map((link) => `
      <a class="app-link" href="${link.url}" ${linkAttributes(link.url)}
         data-name="${link.name}">
        <span class="icon-badge" style="background:${link.color}">
          <i class="${link.icon}" aria-hidden="true"></i>
        </span>
        <span class="link-name">${link.name}</span>
        <i class="fa-solid fa-chevron-right chevron" aria-hidden="true"></i>
      </a>
    `)
    .join("");
}

function logClick(event) {
  const link = event.target.closest("a[data-name]");
  if (!link) return;
  console.log(`用户点击了：${link.dataset.name}`);
}

function addRipple(event) {
  const button = event.target.closest(".app-link");
  if (!button) return;

  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.className = "ripple";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

renderSocialLinks();
renderMainLinks();

document.addEventListener("click", logClick);
mainLinks.addEventListener("pointerdown", addRipple);
