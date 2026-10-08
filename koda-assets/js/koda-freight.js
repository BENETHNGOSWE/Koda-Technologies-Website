
        const vretailHeroStats = document.querySelector('.vretail-hero__stats');

        if (window.innerWidth < 992 && vretailHeroStats) {

            let isScrolledToEnd = false;

            const vretailHeroStatsAutoScroll = setInterval(() => {

                vretailHeroStats.scrollTo({
                    left: isScrolledToEnd ? 0 : vretailHeroStats.scrollWidth,
                    behavior: 'smooth'
                });

                isScrolledToEnd = !isScrolledToEnd;

            }, 2500);

            function stopVretailHeroStatsAutoScroll() {
                clearInterval(vretailHeroStatsAutoScroll);
            }

            vretailHeroStats.addEventListener('touchstart', stopVretailHeroStatsAutoScroll, { once: true });
            vretailHeroStats.addEventListener('mousedown', stopVretailHeroStatsAutoScroll, { once: true });
            vretailHeroStats.addEventListener('wheel', stopVretailHeroStatsAutoScroll, { once: true });
        }
    

        // Chart data in {x, y} format
        const vretailHeroChartData = [
            { x: 0, y: 42.0 },
            { x: 1, y: 42.7 },
            { x: 2, y: 43.5 },
            { x: 3, y: 44.2 },
            { x: 4, y: 45.0 },
            { x: 5, y: 45.8 },
            { x: 6, y: 46.6 },
            { x: 7, y: 47.5 },
            { x: 8, y: 48.6 },
            { x: 9, y: 49.8 },
            { x: 10, y: 51.0 },
            { x: 11, y: 52.2 },
            { x: 12, y: 53.4 },
            { x: 13, y: 54.0 },
            { x: 14, y: 53.8 },
            { x: 15, y: 53.3 },
            { x: 16, y: 52.8 },
            { x: 17, y: 52.4 },
            { x: 18, y: 52.0 },
            { x: 19, y: 52.6 },
            { x: 20, y: 53.6 },
            { x: 21, y: 54.8 },
            { x: 22, y: 56.1 },
            { x: 23, y: 57.5 },
            { x: 24, y: 58.8 },
            { x: 25, y: 60.0 },
            { x: 26, y: 61.2 },
            { x: 27, y: 62.6 },
            { x: 28, y: 64.0 },
            { x: 29, y: 65.3 },
            { x: 30, y: 66.4 },
            { x: 31, y: 67.0 },
            { x: 32, y: 66.7 },
            { x: 33, y: 66.3 },
            { x: 34, y: 65.7 },
            { x: 35, y: 65.0 },
            { x: 36, y: 64.2 },
            { x: 37, y: 63.5 },
            { x: 38, y: 63.0 },
            { x: 39, y: 63.4 },
            { x: 40, y: 64.2 },
            { x: 41, y: 65.1 },
            { x: 42, y: 66.0 },
            { x: 43, y: 66.9 },
            { x: 44, y: 67.6 },
            { x: 45, y: 68.0 },
            { x: 46, y: 68.4 },
            { x: 47, y: 68.8 },
            { x: 48, y: 69.2 },
            { x: 49, y: 69.6 },
            { x: 50, y: 70.0 }
        ];

        const vretailHeroCanvas =
            document.getElementById("vretailHeroChart");

        const vretailHeroContext =
            vretailHeroCanvas.getContext("2d");

        const vretailHeroGradient =
            vretailHeroContext.createLinearGradient(
                0,
                0,
                0,
                180
            );

        vretailHeroGradient.addColorStop(
            0,
            "rgba(6,1,115,0.1291)"
        );

        vretailHeroGradient.addColorStop(
            1,
            "rgba(6,1,115,0.0)"
        );

        // Progressive animation
        const totalDuration = 1800;
        const delayBetweenPoints = totalDuration / (vretailHeroChartData.length - 1);

        const previousY = (ctx) =>
            ctx.index === 0
                ? ctx.chart.scales.y.getPixelForValue(vretailHeroChartData[0].y)
                : ctx.chart
                    .getDatasetMeta(ctx.datasetIndex)
                    .data[ctx.index - 1]
                    .getProps(["y"], true).y;

        const animation = {
            x: {
                type: "number",
                easing: "linear",
                duration: delayBetweenPoints,
                from: NaN,
                delay(ctx) {
                    if (ctx.type !== "data" || ctx.xStarted) {
                        return 0;
                    }

                    ctx.xStarted = true;
                    return ctx.index * delayBetweenPoints;
                }
            },

            y: {
                type: "number",
                easing: "linear",
                duration: delayBetweenPoints,
                from: previousY,
                delay(ctx) {
                    if (ctx.type !== "data" || ctx.yStarted) {
                        return 0;
                    }

                    ctx.yStarted = true;
                    return ctx.index * delayBetweenPoints;
                }
            }
        };

        const config = {
            type: "line",

            data: {
                datasets: [{
                    data: vretailHeroChartData,

                    borderColor: "#060173",
                    backgroundColor: vretailHeroGradient,

                    fill: true,
                    borderWidth: 3,
                    tension: 0.45,

                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                animation,

                plugins: {
                    legend: {
                        display: false
                    },

                    tooltip: {
                        enabled: false
                    }
                },

                scales: {
                    x: {
                        type: "linear",

                        display: false,

                        grid: {
                            display: false,
                            drawBorder: false
                        },

                        border: {
                            display: false
                        }
                    },

                    y: {
                        display: false,

                        grid: {
                            display: false,
                            drawBorder: false
                        },

                        border: {
                            display: false
                        }
                    }
                }
            }
        };

        new Chart(vretailHeroContext, config);
    


        new Swiper('.vretail-offer-swiper', {
            slidesPerView: 1.15,      // peek next slide
            centeredSlides: true,
            spaceBetween: 16,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,  // resumes after user swipe
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.vretail-offer-swiper__pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                }
            }
        });

    

        const cards = document.querySelectorAll('.vretail-features__card');
        const btn = document.querySelector('.vretail-features__toggle');

        let expanded = false;

        function visibleCount() {

            if (window.innerWidth < 576) {
                return 3;
            }

            if (window.innerWidth < 768) {
                return 4;
            }

            return cards.length;
        }

        function updateGrid() {

            const limit = visibleCount();

            cards.forEach((card, index) => {

                card.classList.toggle(
                    'is-hidden',
                    !expanded && index >= limit
                );

            });

            if (limit === cards.length) {

                btn.style.display = 'none';
                return;
            }

            btn.style.display = 'inline';

            btn.textContent = expanded
                ? 'View Less'
                : 'View More';
        }

        btn.addEventListener('click', () => {

            expanded = !expanded;

            updateGrid();

        });

        window.addEventListener('resize', () => {

            expanded = false;

            updateGrid();

        });

        updateGrid();
    

        let vretailIndustriesMobileSwiper = null;
        let vretailIndustriesDesktopSwiper = null;

        let vretailIndustriesCurrentMode = null;
        let vretailIndustriesResizeTimer = null;


        const vretailIndustriesMainElement =
            document.querySelector(".vretail-industries__cards");

        const vretailIndustriesMainWrapper =
            vretailIndustriesMainElement?.querySelector(".swiper-wrapper");

        const vretailIndustriesDesktopWrapper =
            document.querySelector(".vretail-industries__desktop-wrapper");

        /*
         * These are cards 13–27.
         */
        const vretailIndustriesDesktopCards = Array.from(
            document.querySelectorAll(
                ".vretail-industries__desktop-slide-card"
            )
        );


        /*
         * Move cards 13–27 into the desktop final-row Swiper.
         */
        function moveVretailIndustriesCardsToDesktop() {

            vretailIndustriesDesktopCards.forEach((card) => {
                vretailIndustriesDesktopWrapper.appendChild(card);
            });

        }


        /*
         * Move cards 13–27 back after cards 1–12.
         * This restores the full 27-card mobile Swiper.
         */
        function moveVretailIndustriesCardsToMobile() {

            vretailIndustriesDesktopCards.forEach((card) => {
                vretailIndustriesMainWrapper.appendChild(card);
            });

        }


        function initVretailIndustriesMobileSwiper() {

            if (vretailIndustriesMobileSwiper) {
                return;
            }

            vretailIndustriesMobileSwiper = new Swiper(
                ".vretail-industries__cards",
                {
                    loop: true,

                    grabCursor: true,

                    speed: 700,

                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },

                    pagination: {
                        el: ".vretail-industries__pagination",
                        clickable: true
                    },

                    breakpoints: {

                        0: {
                            slidesPerView: 1.08,
                            centeredSlides: true,
                            spaceBetween: 16
                        },

                        576: {
                            slidesPerView: 2,
                            centeredSlides: false,
                            spaceBetween: 18
                        }

                    }

                }
            );

        }


        function initVretailIndustriesDesktopSwiper() {

            if (vretailIndustriesDesktopSwiper) {
                return;
            }

            vretailIndustriesDesktopSwiper = new Swiper(
                ".vretail-industries__desktop-swiper",
                {
                    loop: true,

                    grabCursor: true,

                    speed: 700,

                    spaceBetween: 18,

                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },

                    pagination: {
                        el: ".vretail-industries__desktop-pagination",
                        clickable: true
                    },

                    breakpoints: {

                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },

                        992: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },

                        1200: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        }

                    }

                }
            );

        }


        function updateVretailIndustriesLayout() {

            const isMobile = window.innerWidth < 768;
            const nextMode = isMobile ? "mobile" : "desktop";


            /*
             * Prevent unnecessary rebuilding when resizing
             * within the same breakpoint.
             */
            if (vretailIndustriesCurrentMode === nextMode) {
                return;
            }

            vretailIndustriesCurrentMode = nextMode;


            if (isMobile) {

                /*
                 * Destroy desktop Swiper before moving its slides.
                 */
                if (vretailIndustriesDesktopSwiper) {

                    vretailIndustriesDesktopSwiper.destroy(true, true);
                    vretailIndustriesDesktopSwiper = null;

                }


                /*
                 * Restore cards 13–27 after cards 1–12.
                 */
                moveVretailIndustriesCardsToMobile();


                /*
                 * Initialize one mobile Swiper with all 27 cards.
                 */
                initVretailIndustriesMobileSwiper();

            } else {

                /*
                 * Destroy mobile Swiper before separating its cards.
                 */
                if (vretailIndustriesMobileSwiper) {

                    vretailIndustriesMobileSwiper.destroy(true, true);
                    vretailIndustriesMobileSwiper = null;

                }


                /*
                 * Move cards 13–27 into the desktop final-row slider.
                 */
                moveVretailIndustriesCardsToDesktop();


                /*
                 * Initialize desktop slider.
                 */
                initVretailIndustriesDesktopSwiper();

            }

        }


        updateVretailIndustriesLayout();


        window.addEventListener("resize", function () {

            clearTimeout(vretailIndustriesResizeTimer);

            vretailIndustriesResizeTimer = setTimeout(function () {

                updateVretailIndustriesLayout();

            }, 150);

        });
    

        let vretailIntegrationSwiper = null;

        function initVretailIntegrationSwiper() {
            const swiperEl = document.querySelector(".vretail-integration__swiper");

            if (!swiperEl) return;

            const isMobile = window.matchMedia("(max-width: 575.98px)").matches;

            if (isMobile && !vretailIntegrationSwiper) {
                vretailIntegrationSwiper = new Swiper(swiperEl, {
                    slidesPerView: 1,
                    spaceBetween: 18,
                    speed: 600,
                    loop: true,
                    grabCursor: true,
                    observer: true,
                    observeParents: true,

                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },

                    pagination: {
                        el: ".vretail-integration__pagination",
                        clickable: true
                    }
                });
            }

            if (!isMobile && vretailIntegrationSwiper) {
                vretailIntegrationSwiper.destroy(true, true);
                vretailIntegrationSwiper = null;
            }
        }

        window.addEventListener("load", initVretailIntegrationSwiper);
        window.addEventListener("resize", initVretailIntegrationSwiper);
    

        const whyErpSection = document.querySelector(".vretail-whyerp");
        const whyErpBtn = document.querySelector(".vretail-whyerp__more-btn");

        if (whyErpSection && whyErpBtn) {
            whyErpBtn.addEventListener("click", () => {
                whyErpSection.classList.toggle("is-expanded");

                whyErpBtn.textContent = whyErpSection.classList.contains("is-expanded")
                    ? "View Less"
                    : "View More";
            });
        }
    

        const vretailTestimonialsSwiper = new Swiper(".vretail-testimonials__swiper", {
            slidesPerView: 3,
            spaceBetween: 24,
            speed: 650,
            grabCursor: true,
            loop: true,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },

            navigation: {
                nextEl: ".vretail-testimonials__btn--next",
                prevEl: ".vretail-testimonials__btn--prev"
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 18
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });
    

        const vretailFaqItems = document.querySelectorAll(".vretail-faq__item");

        vretailFaqItems.forEach((item) => {
            const question = item.querySelector(".vretail-faq__question");

            question.addEventListener("click", () => {
                vretailFaqItems.forEach((faq) => {
                    if (faq !== item) {
                        faq.classList.remove("is-open");
                    }
                });

                item.classList.toggle("is-open");
            });
        });
    
document.querySelectorAll('.vretail-faq__question').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.vretail-faq__item').forEach(item=>item.querySelector('button').setAttribute('aria-expanded',String(item.classList.contains('is-open'))));}));

// Qualitative goals retain a scroll-triggered reveal without fabricated numeric results.
const goals=document.querySelectorAll('.vretail-outcomes__cell');
const goalObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.animate([{opacity:.35,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:650,easing:'ease-out'});goalObserver.unobserve(entry.target);}}),{threshold:.3});
goals.forEach(goal=>goalObserver.observe(goal));
