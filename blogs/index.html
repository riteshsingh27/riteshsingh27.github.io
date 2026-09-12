/* =========================================================
   RITESH SINGH — BLOGS
   =========================================================

   SINGLE SOURCE OF TRUTH

   Home:
   single-card carousel

   Blog tab:
   all posts

   Add every new blog ONLY here.
   ========================================================= */


const blogsData = [

  {
    date:
      '2026-09-01',

    displayDate:
      'September 2026',

    title:
      'Add your latest blog title here',

    excerpt:
      'Write four or five interesting lines here that introduce the idea behind the post without giving everything away. This teaser should explain why the topic matters and encourage the reader to continue reading.',

    image:
      'images/blogs/blog1.jpg',

    url:
      'blogs/blog1.html'
  },


  {
    date:
      '2026-08-01',

    displayDate:
      'August 2026',

    title:
      'Add your second blog title here',

    excerpt:
      'Use this space for a short introduction to the blog. Around four or five lines works well on the homepage and gives visitors enough context to decide whether they would like to read the complete article.',

    image:
      'images/blogs/blog2.jpg',

    url:
      'blogs/blog2.html'
  }

];



let currentBlogIndex = 0;



function escapeBlogHtml(value) {

  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

}



function sortedBlogs() {

  return [...blogsData].sort(

    (a, b) =>
      new Date(b.date) -
      new Date(a.date)

  );

}



/* =========================================================
   HOME BLOG CAROUSEL
   ========================================================= */

function renderLatestBlogs(
  containerId = 'latestBlogs'
) {

  const container =
    document.getElementById(containerId);


  if (!container) return;


  const blogs =
    sortedBlogs();


  if (!blogs.length) {

    container.innerHTML =
      '<p>No blog posts yet.</p>';

    return;

  }


  container.innerHTML =
    blogs.map(blog => `

      <article class="blog-slide">

        ${
          blog.image

            ? `
              <img
                src="${escapeBlogHtml(blog.image)}"
                alt="${escapeBlogHtml(blog.title)}"
                loading="lazy"
              >
            `

            : `
              <div
                class="blog-slide-placeholder"
                aria-hidden="true"
              ></div>
            `
        }


        <div class="blog-slide-content">

          <h3 class="blog-slide-title">

            <a
              href="${escapeBlogHtml(blog.url)}"
              style="
                color:inherit;
                text-decoration:none;
              "
            >
              ${escapeBlogHtml(blog.title)}
            </a>

          </h3>


          <div class="blog-slide-meta">

            ${escapeBlogHtml(blog.displayDate)}

          </div>


          <p class="blog-slide-desc">

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

    `).join('');


  renderBlogDots();

}



function blogSlides() {

  return Array.from(

    document.querySelectorAll(
      '#latestBlogs .blog-slide'
    )

  );

}



function renderBlogDots() {

  const container =
    document.getElementById(
      'blogDots'
    );


  if (!container) return;


  const blogs =
    sortedBlogs();


  container.innerHTML =
    blogs.map((blog, index) => `

      <button
        class="carousel-dot ${
          index === currentBlogIndex
            ? 'active'
            : ''
        }"
        type="button"
        onclick="goToBlog(${index})"
        aria-label="Show blog ${index + 1}"
      ></button>

    `).join('');

}



function updateBlogDots() {

  document
    .querySelectorAll(
      '#blogDots .carousel-dot'
    )
    .forEach(
      (dot, index) => {

        dot.classList.toggle(
          'active',
          index === currentBlogIndex
        );

      }
    );

}



function goToBlog(index) {

  const carousel =
    document.getElementById(
      'latestBlogs'
    );


  const slides =
    blogSlides();


  if (
    !carousel ||
    !slides.length
  ) return;


  currentBlogIndex =
    (
      index +
      slides.length
    ) % slides.length;


  carousel.scrollTo({

    left:
      slides[currentBlogIndex]
        .offsetLeft -
      carousel.offsetLeft,

    behavior:
      'smooth'

  });


  updateBlogDots();

}



function nextBlog() {

  const slides =
    blogSlides();


  if (!slides.length) return;


  goToBlog(
    currentBlogIndex + 1
  );

}



function previousBlog() {

  const slides =
    blogSlides();


  if (!slides.length) return;


  goToBlog(
    currentBlogIndex - 1
  );

}



/* =========================================================
   BLOG ARCHIVE
   ========================================================= */

function renderAllBlogs(
  containerId = 'allBlogs'
) {

  const container =
    document.getElementById(containerId);


  if (!container) return;


  const blogs =
    sortedBlogs();


  container.innerHTML =
    blogs.map(blog => {

      /*
       blogs/index.html is inside the
       /blogs/ directory.

       Therefore images and article links
       need ../ adjustment.
      */

      const image =
        blog.image
          ? '../' + blog.image
          : '';


      const url =
        blog.url.startsWith('blogs/')
          ? blog.url.replace(
              'blogs/',
              ''
            )
          : blog.url;


      return `

        <article class="blog-list-card">

          ${
            image

              ? `
                <img
                  class="blog-thumb"
                  src="${escapeBlogHtml(image)}"
                  alt="${escapeBlogHtml(blog.title)}"
                  loading="lazy"
                >
              `

              : ''
          }


          <div>

            <h2 class="blog-title">

              ${escapeBlogHtml(blog.title)}

            </h2>


            <div class="blog-meta">

              ${escapeBlogHtml(blog.displayDate)}

            </div>


            <p class="blog-desc">

              ${escapeBlogHtml(blog.excerpt)}

            </p>


            <a
              class="read-link"
              href="${escapeBlogHtml(url)}"
            >
              Read More
            </a>

          </div>

        </article>

      `;

    }).join('');

}
