import React from 'react';
import HeroBanner from '../src/components/HeroBanner';
import Certification from '../src/section/Certification';
import Education from '../src/section/Education';
import WorkExperience from '../src/section/WorkExperience';
import { Layout } from '../src/template/Layout';

export default function education() {
  return (
    <Layout title="Dani Danial | Pengalaman, Riwayat Pendidikan dan Certification">
      <HeroBanner
        judul="Pengalaman dan Certification"
        image="/assets/experience.jpg"
        deskripsi="ini merupakan Riwayat Pendidikan, Pengalaman Pekerjaan dan pelatihan profesional yang pernah dilakukan"
      />
      <Education />
      <WorkExperience />
      <Certification />
    </Layout>
  );
}
