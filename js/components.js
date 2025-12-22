/**
 * Common Components Loader
 * Handles Header, Footer, and Background Blobs across all pages.
 */

function initComponents() {
    // 1. Inject Background Blobs
    if (!document.querySelector('.background-blobs')) {
        const bgContainer = document.createElement('div');
        bgContainer.className = 'background-blobs';
        bgContainer.innerHTML = `
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
        `;
        document.body.prepend(bgContainer);
    }

    // 2. Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header class="header" id="header">
                <a href="index.html" class="logo">JIL</a>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="index.html#about" class="nav-item">About</a></li>
                        <li><a href="index.html#service" class="nav-item">Service</a></li>
                        <li><a href="index.html#organization" class="nav-item">Organization</a></li>
                        <li><a href="index.html#contact" class="nav-item">info</a></li>
                    </ul>
                </nav>
                <a href="index.html#contact" class="btn-contact">CONTACT</a>
            </header>
        `;

        // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <a href="index.html" class="footer-logo">JIL</a>
                    <nav class="footer-nav">
                        <a href="index.html#about" class="footer-link">About</a>
                        <a href="index.html#service" class="footer-link">Service</a>
                        <a href="index.html#organization" class="footer-link">Organization</a>
                        <a href="index.html#contact" class="footer-link">info</a>
                    </nav>
                </div>
                <div class="copyright">
                    &copy; 2025 JIL Inc. All Rights Reserved.
                </div>
            </footer>
        `;
    }
}

// Run on DOM load
document.addEventListener('DOMContentLoaded', initComponents);
