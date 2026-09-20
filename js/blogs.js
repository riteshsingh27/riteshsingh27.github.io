/* =========================================================
   RITESH SINGH — BLOG DATA + RENDERING
   =========================================================

   index.html
   → Latest from the Blog carousel

   blogs/index.html
   → All published blog posts

   IMPORTANT:
   Home page image paths are relative to index.html.
   Blog listing image paths are adjusted automatically.
   ========================================================= */


/* =========================================================
   BLOG DATA
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
      'blogs/blog1.html',

    published:
      true
  }

];


/* =========================================================
   PUBLISHED BLOGS
   ========================================================= */

function getPublishedBlogs() {

  return blogPosts.filter(
    blog => blog.published !== false
  );

}


/* =========================================================
   CURRENT HOME BLOG
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
   HOME PAGE BLOG CARD
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
   RENDER HOME BLOG CAROUSEL
   ========================================================= */

function renderBlogCarousel(
  containerId = 'latestBlogs'
) {

  const container =
    document.getElementById(containerId);


  if (!container) {
    return;
  }


  const publishedBlogs =
    getPublishedBlogs();


  if (!publishedBlogs.length) {

    container.innerHTML = '';

    return;

  }


  if (currentBlogIndex < 0) {

    currentBlogIndex =
      publishedBlogs.length - 1;

  }


  if (
    currentBlogIndex >=
    publishedBlogs.length
  ) {

    currentBlogIndex = 0;

  }


  const blog =
    publishedBlogs[currentBlogIndex];


  container.innerHTML =
    blogCardTemplate(blog);


  updateBlogIndicators();

}


/* =========================================================
   PREVIOUS HOME BLOG
   ========================================================= */

function previousBlog() {

  const publishedBlogs =
    getPublishedBlogs();


  if (!publishedBlogs.length) {
    return;
  }


  currentBlogIndex =
    (
      currentBlogIndex -
      1 +
      publishedBlogs.length
    ) %
    publishedBlogs.length;


  renderBlogCarousel();

}


/* =========================================================
   NEXT HOME BLOG
   ========================================================= */

function nextBlog() {

  const publishedBlogs =
    getPublishedBlogs();


  if (!publishedBlogs.length) {
    return;
  }


  currentBlogIndex =
    (
      currentBlogIndex +
      1
    ) %
    publishedBlogs.length;


  renderBlogCarousel();

}


/* =========================================================
   ALIASES FOR EXISTING HOME CONTROLS
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
   HOME CAROUSEL INDICATORS
   ========================================================= */

function updateBlogIndicators() {

  const publishedBlogs =
    getPublishedBlogs();


  const counter =
    document.getElementById(
      'blogCounter'
    );


  if (counter) {

    counter.textContent =
      `${currentBlogIndex + 1} / ${publishedBlogs.length}`;

  }


  const dotsContainer =
    document.getElementById(
      'blogDots'
    );


  if (!dotsContainer) {
    return;
  }


  dotsContainer.innerHTML =
    publishedBlogs
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
   SHOW SPECIFIC HOME BLOG
   ========================================================= */

function showBlog(index) {

  const publishedBlogs =
    getPublishedBlogs();


  if (
    index < 0 ||
    index >= publishedBlogs.length
  ) {

    return;

  }


  currentBlogIndex = index;


  renderBlogCarousel();

}


/* =========================================================
   BLOG LIST PAGE CARD
   ========================================================= */

function allBlogsCardTemplate(blog) {

  /*
     blogs/index.html is one folder deeper than index.html.

     Therefore:

     images/example.png
     becomes
     ../images/example.png

     and:

     blogs/blog1.html
     becomes
     blog1.html
  */


  const imagePath =
    blog.image.startsWith('images/')
      ? '../' + blog.image
      : blog.image;


  const blogUrl =
    blog.url.startsWith('blogs/')
      ? blog.url.replace(
          'blogs/',
          ''
        )
      : blog.url;


  return `

    <article class="blog-list-card">

      <img
        class="blog-thumb"
        src="${escapeBlogHtml(imagePath)}"
        alt="${escapeBlogHtml(blog.title)}"
        loading="lazy"
      >


      <div>

        <h2 class="blog-title">

          ${escapeBlogHtml(blog.title)}

        </h2>


        <div class="blog-meta">

          ${escapeBlogHtml(blog.date)}

        </div>


        <p class="blog-desc">

          ${escapeBlogHtml(blog.excerpt)}

        </p>


        <a
          class="read-link"
          href="${escapeBlogHtml(blogUrl)}"
        >

          Read More

        </a>

      </div>

    </article>

  `;

}


/* =========================================================
   RENDER ALL BLOG POSTS
   ========================================================= */

function renderAllBlogs(
  containerId = 'allBlogs'
) {

  const container =
    document.getElementById(
      containerId
    );


  if (!container) {
    return;
  }


  const publishedBlogs =
    getPublishedBlogs();


  if (!publishedBlogs.length) {

    container.innerHTML =
      '<p>No blog posts published yet.</p>';

    return;

  }


  container.innerHTML =
    publishedBlogs
      .map(
        allBlogsCardTemplate
      )
      .join('');

}


/* =========================================================
   INITIALISE HOME CAROUSEL
   ========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  function () {

    /*
       HOME PAGE
    */

    const homeContainer =
      document.getElementById(
        'latestBlogs'
      );


    if (homeContainer) {

      renderBlogCarousel(
        'latestBlogs'
      );

    }


    /*
       EXISTING HOME BUTTONS
    */

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
   HOME PAGE ONLY
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
