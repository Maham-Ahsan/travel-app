import React from 'react';

const About = () => {
  return (
    <div 
      id="about" 
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url(/images/bga.jpeg)",
      }}
    >
      <div className="container bg-opacity-30 bg-white py-12 px-4 rounded-md shadow-lg backdrop-blur-sm">
        <h2 className="text-6xl text-black-900 text-center font-bold mb-6">About Us</h2>
        <div className="flex justify-center mb-4">
          <img 
            src='/images/logo2-removebg-preview.png' 
            alt='Maham' 
            className='h-40 w-40 rounded-full bg-blue-300 shadow-lg' 
          />
        </div>
        <p className="text-lg text-center text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae neque est inventore eius? Consectetur, sed corrupti sunt impedit voluptatem optio placeat laborum reprehenderit nemo delectus hic nesciunt necessitatibus architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem adipisci architecto sapiente odio, numquam illum similique obcaecati minus doloremque, recusandae dignissimos accusamus qui illo necessitatibus voluptas saepe alias amet?
          Incidunt nisi illum, in repudiandae iure deleniti dolores ab ex fuga ut perspiciatis autem molestiae nemo quidem officia assumenda, praesentium, dolor laborum possimus? Alias, expedita voluptatem ipsum culpa corporis corrupti.
          Qui illo commodi possimus maiores eligendi voluptas rem id magni accusamus ratione architecto, aliquid, animi cupiditate totam veniam repudiandae voluptate eum distinctio ullam praesentium, voluptatum dolore fugiat! Suscipit, molestias natus?
        </p>
      </div>
    </div>
  );
}

export default About;
