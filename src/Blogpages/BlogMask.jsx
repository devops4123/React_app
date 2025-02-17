import React from 'react'

const BlogMask = () => {
  return (
    <div>
      
      <main class="main">
        	<div class="page-header text-center" style={{"background-image": "url('assets/images/page-header-bg.jpg')"}}>
        		<div class="container">
        			<h1 class="page-title">Blog Mask Grid<span>Blog</span></h1>
        		</div>
        	</div>
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Blog</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Mask Grid</li>
                    </ol>
                </div>
            </nav>

            <div class="page-content">
                <div class="container">
                    <nav class="blog-nav">
                        <ul class="menu-cat entry-filter justify-content-center">
                            <li class="active"><a href="#" data-filter="*">All Blog Posts<span>9</span></a></li>
                            <li><a href="#" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
                            <li><a href="#" data-filter=".shopping">Shopping<span>1</span></a></li>
                            <li><a href="#" data-filter=".fashion">Fashion<span>2</span></a></li>
                            <li><a href="#" data-filter=".travel">Travel<span>4</span></a></li>
                            <li><a href="#" data-filter=".hobbies">Hobbies<span>2</span></a></li>
                        </ul>
                    </nav>

                	<div class="entry-container" data-layout="fitRows">
                        <div class="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/mask/grid/post-1.jpg" alt="image desc"/>
                                    </a>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <a href="#">Nov 22, 2018</a>
                                        <span class="meta-separator">|</span>
                                        <a href="#">2 Comments</a>
                                    </div>

                                    <h2 class="entry-title">
                                        <a href="single.html">Cras ornare tristique elit.</a>
                                    </h2>

                                    <div class="entry-cats">
                                        in <a href="#">Lifestyle</a>,
                                        <a href="#">Shopping</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="entry-item lifestyle col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media entry-video">
                                    <a href="single.html">
                                        <img src="assets/images/blog/mask/grid/post-2.jpg" alt="image desc"/>
                                    </a>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <a href="#">Nov 21, 2018</a>
                                        <span class="meta-separator">|</span>
                                        <a href="#">0 Comments</a>
                                    </div>

                                    <h2 class="entry-title">
                                        <a href="single.html">Vivamus vestibulum ntulla necante.</a>
                                    </h2>

                                    <div class="entry-cats">
                                        in <a href="#">Lifestyle</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="entry-item lifestyle fashion col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media entry-gallery">
                                    <a href="single.html">
                                        <img src="assets/images/blog/mask/grid/post-3.jpg" alt="image desc"/>
                                    </a>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <a href="#">Nov 18, 2018</a>
                                        <span class="meta-separator">|</span>
                                        <a href="#">3 Comments</a>
                                    </div>

                                    <h2 class="entry-title">
                                        <a href="single.html">Utaliquam sollicitudin leo.</a>
                                    </h2>

                                    <div class="entry-cats">
                                        in <a href="#">Fashion</a>,
                                        <a href="#">Lifestyle</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="entry-item travel col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/mask/grid/post-4.jpg" alt="image desc"/>
                                    </a>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <a href="#">Nov 15, 2018</a>
                                        <span class="meta-separator">|</span>
                                        <a href="#">4 Comments</a>
                                    </div>

                                    <h2 class="entry-title">
                                        <a href="single.html">Fusce pellentesque suscipit.</a>
                                    </h2>

                                    <div class="entry-cats">
                                        in <a href="#">Travel</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="entry-item travel hobbies col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/mask/grid/post-5.jpg" alt="image desc"/>
                                    </a>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <a href="#">Nov 11, 2018</a>
                                        <span class="meta-separator">|</span>
                                        <a href="#">2 Comments</a>
                                    </div>

                                    <h2 class="entry-title">
                                        <a href="single.html">Aenean dignissim pellente squefelis.</a>
                                    </h2>

                                    <div class="entry-cats">
                                        in <a href="#">Travel</a>,
                                        <a href="#">Hobbies</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="entry-item hobbies col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/mask/grid/post-6.jpg" alt="image desc"/>
                                    </a>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <a href="#">Nov 10, 2018</a>
                                        <span class="meta-separator">|</span>
                                        <a href="#">4 Comments</a>
                                    </div>

                                    <h2 class="entry-title">
                                        <a href="single.html">Quisque volutpat mattiseros.</a>
                                    </h2>

                                    <div class="entry-cats">
                                        in <a href="#">Hobbies</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="entry-item travel col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media entry-gallery">
                                    <a href="single.html">
                                        <img src="assets/images/blog/mask/grid/post-7.jpg" alt="image desc"/>
                                    </a>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <a href="#">Nov 11, 2018</a>
                                        <span class="meta-separator">|</span>
                                        <a href="#">3 Comments</a>
                                    </div>

                                    <h2 class="entry-title">
                                        <a href="single.html">Utaliquam sollicitudin leo.</a>
                                    </h2>

                                    <div class="entry-cats">
                                        in <a href="#">Travel</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="entry-item fashion col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/mask/grid/post-8.jpg" alt="image desc"/>
                                    </a>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <a href="#">Nov 08, 2018</a>
                                        <span class="meta-separator">|</span>
                                        <a href="#">0 Comments</a>
                                    </div>

                                    <h2 class="entry-title">
                                        <a href="single.html">Quisque a lectus. </a>
                                    </h2>

                                    <div class="entry-cats">
                                        in <a href="#">Fashion</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="entry-item travel col-sm-6 col-lg-4">
                            <article class="entry entry-mask">
                                <figure class="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/mask/grid/post-9.jpg" alt="image desc"/>
                                    </a>
                                </figure>

                                <div class="entry-body">
                                    <div class="entry-meta">
                                        <a href="#">Nov 07, 2018</a>
                                        <span class="meta-separator">|</span>
                                        <a href="#">5 Comments</a>
                                    </div>

                                    <h2 class="entry-title">
                                        <a href="single.html">Fusce lacinia arcu etnulla.</a>
                                    </h2>

                                    <div class="entry-cats">
                                        in <a href="#">Travel</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                	</div>

                    <div class="mb-3"></div>

                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                    <span aria-hidden="true"><i class="icon-long-arrow-left"></i></span>Prev
                                </a>
                            </li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item">
                                <a class="page-link page-link-next" href="#" aria-label="Next">
                                    Next <span aria-hidden="true"><i class="icon-long-arrow-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>

    </div>
  )
}

export default BlogMask
