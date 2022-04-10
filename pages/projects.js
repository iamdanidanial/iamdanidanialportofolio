import React from 'react';
import HeroBanner from '../src/components/HeroBanner';
import ProjectApps from '../src/section/ProjectsApp';
import { Layout } from '../src/template/Layout';

export default function projects() {
  return (
    <Layout title="Dani Danial | Projects">
      <HeroBanner
        judul="Project Proggram Portofolio"
        image="/assets/project.jpg"
        deskripsi="Berikut adalah kompulan project program portofolio yang pernah dibuat, semoga bisa menjadi pertimbangan"
      />
      <ProjectApps />
    </Layout>
  );
}
