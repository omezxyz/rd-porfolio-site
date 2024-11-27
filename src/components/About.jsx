import React from "react";

const About = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-800" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={require('./images/voda2.jpg')}
          alt="[Profile]"
          className="w-32 h-32 rounded-full mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
        Hi! I'm Ramdhan aka RD Rava, an illustrator and
visual design generalist.
I bring my imagination to life through illustrations,
digital art, and fine art. I'm deeply fascinated by the
endless creative possibilities that design offers
        </p>
      </div>
    </section>
  );
};

export default About;
