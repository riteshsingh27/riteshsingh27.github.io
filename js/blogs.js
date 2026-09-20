/* =========================================================
   RITESH SINGH — BLOG DATA + HOME CAROUSEL
   ========================================================= */


/* =========================================================
   BLOG DATA

   Add future blog posts here.

   image:
   path is relative to index.html because this carousel
   appears on the Home page.

   url:
   path to the complete blog article.
   ========================================================= */

const blogPosts = [

  {
    title:
      'Trees Communicate. Could Growing Them Help Grow Our Networks?',

    date:
      'September 2026',

    excerpt:
      'Plants already exchange information through chemical and biological pathways. Could the living environment one day become part of the sensing and communication infrastructure itself?',

    image:
      'images/trees-communicate-thumbnail.png',

    url:
      'blogs/blog1.html'
  }

];


/* =========================================================
   CURRENT BLOG
   ========================================================= */

let currentBlogIndex = 0;


/* =========================================================
   BASIC HTML SAFETY
   ========================================================= */

function escapeBlogHtml(value) {

  return String(value ?? '')

    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

}


/* =========================================================
   BLOG CARD
   ========================================================= */

function blogCardTemplate(blog) {

  return `

    <article class="home-blog-card">

      <div class="home-blog-image">

        <img
          src="${escapeBlogHtml(blog.image)}"
          alt="${escapeBlogHtml(blog.title)}"
          loading="lazy"
        >

      </div>


      <div class="home-blog-content">

        <h3 class="home-blog-title">

          <a href="${escapeBlogHtml(blog.url)}">
            ${escapeBlogHtml(blog.title)}
          </a>

        </h3>


        <div class="home-blog-date">
          ${escapeBlogHtml(blog.date)}
        </div>


        <p class="home-blog-excerpt">
          ${escapeBlogHtml(blog.excerpt)}
        </p>


        <a
          class="read-link"
          href="${escapeBlogHtml(blog.url)}"
        >
          Read More
        </a>

      </div>

    </article>

  `;

}


/* =========================================================
   RENDER BLOG
   ========================================================= */

function renderBlogCarousel(
  containerId = 'latestBlogs'
) {

  const container =
    document.getElementById(containerId);

  if (!container) {
    return;
  }


  if (!blogPosts.length) {

    container.innerHTML = '';
    return;

  }


  if (currentBlogIndex < 0) {

    currentBlogIndex =
      blogPosts.length - 1;

  }


  if (
    currentBlogIndex >=
    blogPosts.length
  ) {

    currentBlogIndex = 0;

  }


  const blog =
    blogPosts[currentBlogIndex];


  container.innerHTML =
    blogCardTemplate(blog);


  updateBlogIndicators();

}


/* =========================================================
   PREVIOUS BLOG
   ========================================================= */

function previousBlog() {

  if (!blogPosts.length) {
    return;
  }


  currentBlogIndex =
    (
      currentBlogIndex -
      1 +
      blogPosts.length
    ) %
    blogPosts.length;


  renderBlogCarousel();

}


/* =========================================================
   NEXT BLOG
   ========================================================= */

function nextBlog() {

  if (!blogPosts.length) {
    return;
  }


  currentBlogIndex =
    (
      currentBlogIndex +
      1
    ) %
    blogPosts.length;


  renderBlogCarousel();

}


/* =========================================================
   ALIASES

   These allow different button names to continue working
   if the Home page already calls prevBlog() / nextBlog().
   ========================================================= */

function prevBlog() {

  previousBlog();

}


function showPreviousBlog() {

  previousBlog();

}


function showNextBlog() {

  nextBlog();

}


/* =========================================================
   INDICATORS / DOTS
   ========================================================= */

function updateBlogIndicators() {

  const counter =
    document.getElementById(
      'blogCounter'
    );


  if (counter) {

    counter.textContent =
      `${currentBlogIndex + 1} / ${blogPosts.length}`;

  }


  const dotsContainer =
    document.getElementById(
      'blogDots'
    );


  if (!dotsContainer) {
    return;
  }


  dotsContainer.innerHTML =
    blogPosts
      .map(
        (_, index) => `

          <button
            type="button"
            class="blog-dot ${
              index === currentBlogIndex
                ? 'active'
                : ''
            }"
            aria-label="Show blog ${index + 1}"
            onclick="showBlog(${index})"
          ></button>

        `
      )
      .join('');

}


/* =========================================================
   SHOW SPECIFIC BLOG
   ========================================================= */

function showBlog(index) {

  if (
    index < 0 ||
    index >= blogPosts.length
  ) {
    return;
  }


  currentBlogIndex = index;

  renderBlogCarousel();

}


/* =========================================================
   SUPPORT EXISTING HOME BUTTON IDS
   ========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  function () {

    renderBlogCarousel(
      'latestBlogs'
    );


    const previousButton =
      document.getElementById(
        'blogPrev'
      );


    const nextButton =
      document.getElementById(
        'blogNext'
      );


    if (
      previousButton &&
      !previousButton.hasAttribute(
        'onclick'
      )
    ) {

      previousButton.addEventListener(
        'click',
        previousBlog
      );

    }


    if (
      nextButton &&
      !nextButton.hasAttribute(
        'onclick'
      )
    ) {

      nextButton.addEventListener(
        'click',
        nextBlog
      );

    }

  }
);


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
  'keydown',
  function (event) {

    const container =
      document.getElementById(
        'latestBlogs'
      );


    if (!container) {
      return;
    }


    if (event.key === 'ArrowLeft') {

      previousBlog();

    }


    if (event.key === 'ArrowRight') {

      nextBlog();

    }

  }
);
