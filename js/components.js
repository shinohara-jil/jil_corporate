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
        // Detect if landing/index page
        const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

        headerPlaceholder.innerHTML = `
            <header class="header" id="header">
                <a href="index.html" class="logo">JIL</a>
                
                <nav class="nav">
                    <ul class="nav-list">
                        <li class="nav-item-group">
                            <a href="about.html" class="nav-item">About</a>
                            <ul class="nav-sub-list">
                                <li><a href="about.html#about-mission">Mission / Vision / Value</a></li>
                                <li><a href="about.html#about-style">Style</a></li>
                            </ul>
                        </li>
                        <li class="nav-item-group">
                            <a href="client-solution.html" class="nav-item">Service</a>
                            <ul class="nav-sub-list">
                                <li><a href="client-solution.html">Client solution</a></li>
                                <li><a href="product.html">Product</a></li>
                            </ul>
                        </li>
                        <li class="nav-item-group">
                            <a href="member.html" class="nav-item">Team</a>
                            <ul class="nav-sub-list">
                                <li><a href="member.html#board-member">Board Member</a></li>
                                <li><a href="member.html#team-member">Team Member</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html#organization" class="nav-item">info</a></li>
                    </ul>
                </nav>

                <div class="header-right">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAXunAozpcLmemfDljHNJKcEWXTtktF8tV6RECRALBNyaGhQ/viewform?usp=publish-editor" class="btn-contact" target="_blank" rel="noopener noreferrer">CONTACT</a>
                    <button class="hamburger-btn" id="hamburger-btn" aria-label="Menu">
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div class="mobile-menu" id="mobile-menu">
                    <nav class="mobile-nav">
                        <div class="mobile-nav-item-group">
                            <a href="index.html" class="mobile-nav-label-link">TOP</a>
                        </div>
                        <div class="mobile-nav-item-group">
                            <a href="about.html" class="mobile-nav-label-link">ABOUT</a>
                        </div>
                        <div class="mobile-nav-item-group">
                            <span class="mobile-nav-label">SERVICE</span>
                            <a href="client-solution.html" class="mobile-sub-link">CLIENT SOLUTION</a>
                            <a href="product.html" class="mobile-sub-link">PRODUCT</a>
                        </div>
                        <div class="mobile-nav-item-group">
                            <a href="member.html" class="mobile-nav-label-link">TEAM</a>
                        </div>
                        <div class="mobile-nav-item-group">
                            <a href="index.html#organization" class="mobile-nav-label-link">INFO</a>
                        </div>
                    </nav>
                </div>
            </header>
        `;

        const header = document.getElementById('header');
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;

        // Function to update header style based on scroll
        const updateHeaderStyle = () => {
            const scrollThreshold = 50;
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
                header.classList.remove('header-initial-white');
            } else {
                header.classList.remove('scrolled');
                if (isHomePage) {
                    header.classList.add('header-initial-white');
                }
            }
        };

        // Initial check
        updateHeaderStyle();

        window.addEventListener('scroll', updateHeaderStyle);

        // Mobile Menu Toggle
        hamburgerBtn.addEventListener('click', () => {
            header.classList.toggle('nav-open');
            body.style.overflow = header.classList.contains('nav-open') ? 'hidden' : '';
        });

        // Close menu when clicking sub-links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('nav-open');
                body.style.overflow = '';
            });
        });

        // Close menu on resize if width becomes >= 768px
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && header.classList.contains('nav-open')) {
                header.classList.remove('nav-open');
                body.style.overflow = '';
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
                        <div class="footer-nav-col">
                            <a href="about.html" class="footer-link">About</a>
                            <a href="about.html#about-mission" class="footer-sub-link">Mission / Vision / Value</a>
                            <a href="about.html#about-style" class="footer-sub-link">Style</a>
                        </div>
                        <div class="footer-nav-col">
                            <a href="client-solution.html" class="footer-link">Service</a>
                            <a href="client-solution.html" class="footer-sub-link">Client solution</a>
                            <a href="product.html" class="footer-sub-link">Product</a>
                        </div>
                        <div class="footer-nav-col">
                            <a href="member.html" class="footer-link">Team</a>
                            <a href="member.html#board-member" class="footer-sub-link">Board Member</a>
                            <a href="member.html#team-member" class="footer-sub-link">Team Member</a>
                        </div>
                        <div class="footer-nav-col">
                            <a href="index.html#organization" class="footer-link">info</a>
                        </div>
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
