<template>
  <main>
    <HeroSection>
      <HeroCourse />
    </HeroSection>
    <SearchPanel />
    <CourseCardSection />
  </main>
</template>

<script>
import HeroSection from "../components/hero-section/HeroSection";
import HeroCourse from "../components/hero-section/HeroCourse";
import SearchPanel from "../components/course-page-components/SearchPanel";
import CourseCardSection from "../components/course-page-components/CourseCardSection";

export default {
  name: "CoursePage",
  components: {
    HeroSection,
    HeroCourse,
    SearchPanel,
    CourseCardSection
  }
};
</script>
