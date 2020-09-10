<template>
  <div>
    <header class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <Nav />

          <!-- Header -->
          <div
            class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h2
                class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-tight sm:text-6xl lg:text-5xl xl:text-6xl"
              >
                Hey, there!
                <span class="relative text-3xl sm:text-5xl pl-2 bottom-1.5"
                  >👋</span
                >
                <br class="my-2" />
                I'm <span class="text-indigo-700">Jake Dohm</span>
              </h2>
              <div
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl space-y-4 max-w-lg mx-auto lg:mx-0"
              >
                <p>
                  I'm a Web Developer who is passionate about helping other
                  developers build the best experiences possible for their
                  users.
                </p>
                <!-- <div class="w-16 border-b-2 border-gray-200"></div>
                  <p class="font-semibold text-indigo-600">
                    I want to raise the bar for web development.
                  </p> -->
              </div>
              <!-- <div
                  class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div> -->
            </div>
          </div>
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>

      <!-- Left image -->
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          :src="headerImage"
          alt=""
        />
      </div>
    </header>

    <main>
      <section id="content" class="bg-cool-gray-100">
        <div class="container py-12">
          <h2
            class="text-2xl text-center tracking-tight leading-10 font-extrabold text-indigo-600 sm:leading-tight sm:text-4xl"
          >
            My Favorite Content<span class="relative ml-4 text-xl sm:text-3xl"
              >🔥</span
            >
          </h2>

          <div class="flex flex-wrap mt-8 -mx-6">
            <ContentCard
              title="Creating a Global Store in Vue without Vuex"
              url="https://simplygoodwork.com/blog/creating-a-global-store-in-vue"
              image="/img/vue-store.png"
              type="video"
              stat="Recent"
              highlight="screencast"
            />

            <ContentCard
              title="Using Tailwind with Gatsby"
              url="https://dev.to/jakedohm_34/using-tailwind-with-gatsby-js-10fj"
              image="/img/gatsby-tailwind.png"
              type="article"
              stat="5000+ views"
            />

            <ContentCard
              title="Building Blazing Fast Sites with Gridsome"
              url="https://www.youtube.com/watch?v=dXYkXfFVmAI"
              image="/img/amsterdam.jpg"
              type="conf talk"
              stat="1100+ in attendance"
              highlight="video presentation"
            />

            <ContentCard
              title="Cleaning up your Vue.js code with ES6+"
              url="https://blog.logrocket.com/cleaning-up-your-vue-js-code-with-es6/"
              image="/img/logrocket.jpg"
              type="article"
              stat="Guest Post"
            />

            <ContentCard
              title="Fancy Function Parameters - JavaScript January"
              url="https://www.javascriptjanuary.com/blog/fancy-function-parameters"
              image="/img/fancy-functions.jpg"
              type="article"
              stat="10,000+ views"
            />

            <ContentCard
              title="Passing your Craft CMS data to Vue.js with Twig"
              url="https://simplygoodwork.com/blog/passing-your-craft-cms-data-to-vue-js-with-twig"
              image="/img/vue-twig.jpg"
              type="article"
              stat="1600+ views"
            />
          </div>
        </div>
      </section>

      <section id="bonus" class="pt-16 pb-20">
        <div class="container">
          <h2
            class="text-2xl text-center tracking-tight leading-10 font-extrabold text-pink-500 sm:leading-tight sm:text-4xl"
          >
            <span
              class="block md:mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base"
              >Bonus Content:</span
            >
            Lessons learned<br class="hidden md:block" />
            building <em>this</em> website
          </h2>

          <ul class="bullets mt-10 text-lg">
            <li>
              I really need to create some quality Layout Components for Vue so
              that I can stop writing
              <code
                >flex flex-col md:flex-row space-y-4 md:space-y-0
                md:space-x-4</code
              >
              all over the place.
            </li>
            <li>
              Tailwind IntelliSense doesn't work with Nuxt + Tailwind out of the
              box, you have to rename <code>tailwind.config.js</code> to
              <code>tailwind.js</code>.
            </li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="border-t-2 border-cool-gray-100 py-8 text-gray-900">
      <div class="container max-w-4xl text-lg font-medium text-center">
        Thank you for hanging out! ❤️
      </div>
    </footer>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard'
import Nav from '@/components/Nav'

export default {
  components: {
    ContentCard,
    Nav
  },
  data: () => ({
    navStuck: false
  }),
  computed: {
    headerImage() {
      const images = ['header-bg-1.jpg', 'header-bg-2.jpg']
      const image = images[Math.floor(Math.random() * images.length)]

      const resolvedImage = require(`~/assets/images/${image}`)
      return resolvedImage
    }
  },
  mounted() {
    const checkNavStuck = () => {
      this.navStuck = window.scrollY !== 0
    }
    checkNavStuck()
    window.addEventListener('scroll', checkNavStuck)
  }
}
</script>

<style>
code {
  padding: 2px;
  @apply bg-gray-400;
  @apply bg-opacity-25;
  @apply rounded;
  font-size: 0.9em;
}

/* The code below is hacky and
should be refined or deleted */

.bullets > li {
  position: relative;
  padding-left: 20px;

  @apply py-4;
}

.bullets > li:before {
  --size: 6px;
  content: '';
  position: absolute;
  top: calc(1rem + 0.55em);
  left: 0;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  @apply bg-pink-500;
}

@screen md {
  .bullets {
    display: flex;
    flex-wrap: wrap;
  }

  .bullets > li {
    width: 50%;

    padding-right: 2rem;
    padding-left: calc(2rem + 20px);
  }

  .bullets > li:before {
    left: 2rem;
  }
}
</style>
