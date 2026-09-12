/* =========================================================
   RITESH SINGH — BLOG POSTS
   =========================================================

   HOME:
   renderLatestBlogs('latestBlogs', 2);

   BLOG ARCHIVE:
   renderAllBlogs('allBlogs');

   Add each blog once below.
   ========================================================= */


const blogsData = [

  {
    date: '2026-09-01',

    displayDate:
      'September 2026',

    title:
      'Add your latest blog title here',

    excerpt:
      'Write four or five interesting lines here that introduce the idea behind the post without giving everything away. This teaser should tell the reader why the topic matters and encourage them to continue reading the complete article.',

    image:
      '',

    url:
      'blogs/blog2.html'
  },


  {
    date: '2026-08-01',

    displayDate:
      'August 2026',

    title:
      'Add your second blog title here',

    excerpt:
      'Use this space for a short introduction to the blog. Around four or five lines works well on the homepage and gives visitors enough context to decide whether they would like to read the complete article.',

    image:
      '',

    url:
      'blogs/blog1.html'
  }

];



/* =========================================================
   SORT BLOGS
   ========================================================= */

function sortedBlogs() {

  return [...blogsData].sort(
    (a, b) =>
      new Date(b.date) - new Date(a.date)
  );

}



/* =========================================================
   HTML SAFETY
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
   HOME PAGE BLOGS
   ========================================================= */

function renderLatestBlogs(
  containerId = 'latestBlogs',
  limit = 2
) {

  const container =
    document.getElementById(containerId);

  if (!container) return;


  const blogs =
    sortedBlogs()
      .slice(0, limit);


  container.innerHTML =
    blogs.map(blog => `

      <article class="home-blog-card">

        ${
          blog.image
            ? `
              <a
                class="home-blog-image"
                href="${escapeBlogHtml(blog.url)}"
              >

                <img
                  src="${escapeBlogHtml(blog.image)}"
                  alt="${escapeBlogHtml(blog.title)}"
                  loading="lazy"
                >

              </a>
            `
            : ''
        }


        <div class="home-blog-content">

          <div class="home-blog-date">
            ${escapeBlogHtml(blog.displayDate)}
          </div>


          <h3 class="home-blog-title">

            <a href="${escapeBlogHtml(blog.url)}">
              ${escapeBlogHtml(blog.title)}
            </a>

          </h3>


          <p class="home-blog-excerpt">
            ${escapeBlogHtml(blog.excerpt)}
          </p>


          <a
            class="home-blog-link"
            href="${escapeBlogHtml(blog.url)}"
          >
            Read More →
          </a>

        </div>

      </article>

    `).join('');

}



/* =========================================================
   BLOG ARCHIVE PAGE
   ========================================================= */

function renderAllBlogs(
  containerId = 'allBlogs'
) {

  const container =
    document.getElementById(containerId);

  if (!container) return;


  container.innerHTML =
    sortedBlogs()
      .map(blog => `

        <article class="blog-archive-card">

          ${
            blog.image
              ? `
                <a
                  class="blog-archive-image"
                  href="../${escapeBlogHtml(blog.url)}"
                >

                  <img
                    src="../${escapeBlogHtml(blog.image)}"
                    alt="${escapeBlogHtml(blog.title)}"
                    loading="lazy"
                  >

                </a>
              `
              : ''
          }


          <div class="blog-archive-content">

            <div class="blog-meta">
              ${escapeBlogHtml(blog.displayDate)}
            </div>


            <h2 class="blog-title">

              <a href="../${escapeBlogHtml(blog.url)}">
                ${escapeBlogHtml(blog.title)}
              </a>

            </h2>


            <p class="blog-desc">
              ${escapeBlogHtml(blog.excerpt)}
            </p>


            <a
              href="../${escapeBlogHtml(blog.url)}"
            >
              Read More →
            </a>

          </div>

        </article>

      `)
      .join('');

}
