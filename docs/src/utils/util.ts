export function scrollIntoView({ target }: any) {
    const el = document.querySelector(target.getAttribute('href'));
    if (!el) return;
    el.scrollIntoView({
        behavior: 'smooth'
    });
}
export default {
    scrollIntoView
}