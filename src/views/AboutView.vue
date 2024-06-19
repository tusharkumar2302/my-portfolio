<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        // {
        //   id: 1,
        //   name: "Kotlin",
        //   imageUrl:
        //     "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/kotlin-programming-language-icon.png",
        //   status: "Intermediate",
        // },
        // {
        //   id: 2,
        //   name: "Flutter",
        //   imageUrl:
        //     "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flutter-icon.png",
        //   status: "Intermediate",
        // },
        {
          id: 3,
          name: "Javascript",
          imageUrl:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
          status: "Advance",
        },
        // {
        //   id: 4,
        //   name: "PHP",
        //   imageUrl:
        //     "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
        //   status: "Advanced",
        // },
        {
          id: 5,
          name: "NodeJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
          status: "Intermediate",
        },
        {
          id: 6,
          name: "VueJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
          status: "Intermediate",
        },
        {
          id: 7,
          name: "React Native",
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          status: "Advance",
        },
        // {
        //   id: 8,
        //   name: "Codeigniter",
        //   imageUrl:
        //     "https://cdn-peanutsquare.b-cdn.net/wp-content/uploads/2022/11/codeigniter-logo.png",
        //   status: "Intermediate",
        // },
        {
          id: 9,
          name: "ReactJS",
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          status: "Advance",
        },
        // {
        //   id: 10,
        //   name: "Laravel",
        //   imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
        //   status: "Advance",
        // },
        // {
        //   id: 11,
        //   name: "Java",
        //   imageUrl:
        //     "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-256.png",
        //   status: "Intermediate",
        // },
        {
          id: 12,
          name: "Tailwind",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          status: "Intermediate",
        },
      ],
      tools: [
        {
          id: 1,
          name: "Android Studio",
          imageUrl:
            "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png",
          status: "Android Tools",
        },
        {
          id: 2,
          name: "Git",
          imageUrl:
            "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
          status: "Version Control",
        },
        {
          id: 3,
          name: "GitHub",
          imageUrl:
            "https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png",
          status: "Git Hosting",
        },
        {
          id: 4,
          name: "NPM",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
          status: "Package Manager",
        },
        {
          id: 5,
          name: "MySQL",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
          status: "Database",
        },
        {
          id: 6,
          name: "MongoDB",
          imageUrl:
            "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png",
          status: "Mongoose Database",
        },
        {
          id: 7,
          name: "Visual Studio",
          imageUrl:
            "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
          status: "Tools",
        },
      ],
    };
  },
  methods: {
    downloadResume() {
      window.open(
        "https://drive.google.com/drive/folders/1kque2N6DRdftKRRj2Zd3KhOcZtv4xvu9",
        "_blank"
      );
    },
    whatsApp() {
      window.open(
        "https://api.whatsapp.com/send/?phone=918512037083&text=Hello%20Tushar%20Kumar,%20nice%20to%20meet%20you!",
        "_blank"
      );
    },
    email() {
      window.open(
        "mailto:tusharkumar27864@gmail.com?subject=Hello,%20I%20have%20a%20job%20for%20you.",
        "_blank"
      );
    },
  },
};
</script>
<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-sky-50 mx-3 mb-5"
  >
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center"
        >
          About Me &nbsp;
          <div
            class="h-[1px] w-32 bg-sky-200 md:w-96 aos-init aos-animate"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center"
      >
        <div class="flex justify-center">
          <img
            class="w-7/12 rounded-full mb-3 fadein-up"
            src="../assets/picture2.jpg"
            alt="Foto"
          />
        </div>
        <div class="md:w-7/12">
          <p class="text-base mb-3 md:mb-7 fadein-left fadeins-1">
            &nbsp; &nbsp; &nbsp; Hi everyone! My name is Tushar Kumar, a
           Software Engineer from India. With over 2+ years of
            experience, I specialize in creating functional, user-friendly, and
            visually appealing websites and applications. I am proficient in a
            wide range of programming languages and frameworks, including
            TypeScript, ReactJs, React-Native, Node.js, and AWS.
          </p>
          <p class="text-base mb-3 fadein-left fadeins-2">
            &nbsp; &nbsp; &nbsp; My focus is on ensuring that your digital
            products not only perform flawlessly but also stand out with a
            personal touch. I aim to effectively convey your message and brand
            identity through creative and intuitive design also making sure that it is easy to use. If you're looking to
            enhance your online presence, feel free to reach out to me at the
            listed contact.
          </p>
          <div class="py-3 flex">
            <button
              class="fadein-bot fade-500 flex items-center py-2 px-4 text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 text-sky-200 border-sky-200 hover:bg-sky-200 hover:bg-opacity-10 bg-transparent focus:outline-none"
              @click="downloadResume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-2 w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"
                ></path></svg
              >Download Resume
            </button>
            <button
              class="fadein-bot fade-500 flex items-center py-2 px-4 text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 text-sky-200 border-sky-200 hover:bg-sky-200 hover:bg-opacity-10 bg-transparent focus:outline-none ml-2"
              @click="whatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-2 w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"
                ></path></svg
              >WhatsApp
            </button>
            <!-- Tombol Ketiga -->
            <button
              class="fadein-bot fade-500 flex items-center py-2 px-4 text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 text-sky-200 border-sky-200 hover:bg-sky-200 hover:bg-opacity-10 bg-transparent focus:outline-none ml-2"
              @click="email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-2 w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"
                ></path></svg
              >Email
            </button>
          </div>
        </div>
      </section>
      <div
        class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center"
      >
        Experiences &nbsp;
        <div
          class="h-[1px] w-32 bg-sky-200 md:w-96 aos-init aos-animate"
          data-aos="zoom-in-left"
          data-aos-duration="600"
        ></div>
      </div>
      <section class="container experiences">
        <div class="experience-item text-base mb-3 fadein-left">
          <p class="text-xl text-sky-200 font-bold">
            Freelance— Software Engineer
          </p>
          <p class="text-base font-bold">
            <i>Aug 2023 - Present</i>
          </p>
          <ul class="text-base">
            <li>
              <b>1) Project Delivery: </b> Successfully delivered 2 D2C
              full-stack projects, exceeding client expectations and deadlines.
            </li>
            <li>
              <b>2) Performance Optimization: </b> Enhanced application
              performance by optimizing code and database queries, leading to a
              25% reduction in load times.
            </li>
            <li>
              <b>3) Positive Feedback: </b> Received positive feedback and
              recommendations from both of my clients for professionalism and
              technical expertise.
            </li>
            <li>
              <b>4) Requirement Gathering: </b> Participated in 20+ detailed
              discussions with clients to identify gaps in consumer brands and
              their problems solved through technology.
            </li>
          </ul>
        </div>
        <div class="experience-item text-base mb-3 fadein-left">
          <p class="text-xl text-sky-200 font-bold">DevOps Engineer - Intern</p>
          <p class="text-base font-bold">
            <i>INFRASITY , Delhi -> May 2023 - July 2023</i>
          </p>
          <ul class="text-base">
            <li>
              <b>1) CI/CD Pipelines: </b> Built and maintained CI/CD pipelines using Jenkins and Github Actions.
            </li>
            <li>
              <b>2) Infrastructure Management: </b> Managed and monitored cloud infrastructure on AWS.
            </li>
            <li>
              <b>3) Automation: </b>  Automated repetitive tasks using scripts and tools like Terraform.
            </li>
            <li>
              <b>4) Deployment Efficiency: </b>   Reduced deployment time by 30% through automated CI/CD pipelines.
            </li>
            <li>
              <b>5) Savings: </b>  Achieved a 15% reduction in infrastructure costs with Savings Plans (Compute, EC2, Amazon SageMaker) and
              Reserved Instances (Amazon RDS, Amazon Redshift, Amazon ElastiCache, Amazon OpenSearch Service, Amazon DynamoDB).
            </li>
            <li>
              <b>6) Tool Integration: </b>  Worked with the company named Terramate and helped their software in integrating into the existing
              projects and also wrote tech content for them.
            </li>
          </ul>
        </div>
        <div class="experience-item text-base mb-3 fadein-left">
          <p class="text-xl text-sky-200 font-bold">Technical Head</p>
          <p class="text-base font-bold"><i>ENCRYPT, The Tech Society of CVS -> 2022</i></p>
          <ul class="text-base">
            <li>
              <b>1) Successful Projects: </b>  Generated total INR 35,000+ is sponsorship for 3 Hackathon meets and 4 cultural events organized at CVS.
            </li>
            <li>
              <b>2) Event Participation: </b>  Increased event participation by 50% through effective promotion and organization.
            </li>
            <li>
              <b>3) Skill Development: </b>   Facilitated skill development workshops that benefited 100+ students.
            </li>
            <li>
              <b>4) Recognition: </b>  Facilitated a 10% growth in footfall by promoting Annual College Fest “Tatva”, recording 1500+ attendees.
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-sky-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center"
        >
          <div
            class="h-[1px] w-10 bg-sky-200 md:w-20 aos-init aos-animate"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5"
          >
            <li class="mr-2">
              <button
                class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{
                  'text-sky-200 bg-sky-200 bg-opacity-10': activeTab === 1,
                }"
                @click="activeTab = 1"
              >
                Tech Stack
              </button>
            </li>
            <li class="mr-2">
              <button
                class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{
                  'text-sky-200 bg-sky-200 bg-opacity-10': activeTab === 2,
                }"
                @click="activeTab = 2"
              >
                Tools
              </button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-sky-200 px-2 py-2 hover:bg-sky-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                >
                  <img
                    alt="HTML"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl"
                    style="color: transparent"
                  />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div
                    class="tech font-medium text-secondary transition-all duration-300 translate-y-0"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-sky-200 transition-all duration-300 md:text-xs lg:text-sm"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-sky-200 px-2 py-2 hover:bg-sky-200 hover:bg-opacity-10 md:gap-3 lg:px-3"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in"
                >
                  <img
                    alt="HTML"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl"
                    style="color: transparent"
                  />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div
                    class="tech font-medium text-secondary transition-all duration-300 translate-y-0"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-sky-200 transition-all duration-300 md:text-xs lg:text-sm"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}

.experiences {
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
}

.experience-item {
  padding: 10px;
  border-left: 1px solid rgba(135, 206, 235, 0.5);
}
</style>
