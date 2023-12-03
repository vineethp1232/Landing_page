// UseCases.js
import React, { useState } from 'react';
import './UseCases.css'; // Import your CSS file for styling
import case1 from "../Images/case1.jpeg"
import case2 from "../Images/case2.jpeg"
import case3 from "../Images/case3.jpeg"
import case4 from "../Images/case4.jpeg"
const UseCases = () => {
  const useCasesData = [
    {
        id: 0,
        title: 'Enhanced Security',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum lobortis nibh venenatis aliquet. Sed quis magna et justo ornare aliquet nec a est. Maecenas nec quam ut metus pretium elementum. Curabitur eget viverra urna, eget volutpat libero. Morbi sagittis ultrices ex commodo dignissim. Aenean ornare, nisl feugiat dapibus ultrices, elit metus tristique purus, a ultrices felis turpis porttitor sem.',
        imageUrl: case1,
      },
      {
        id: 1,
        title: 'Seamless Collaboration',
        description: 'Suspendisse elementum erat nibh, vel sollicitudin orci fermentum et. Sed laoreet scelerisque efficitur. Morbi efficitur eget est eu viverra. Suspendisse arcu lorem, euismod sit amet lobortis ut, sodales vel enim. In in enim non nisl rhoncus porta semper rhoncus quam. Praesent tempor ante in commodo condimentum. Quisque nec augue non erat tempor mollis. Aenean laoreet nibh quis odio sodales ultricies.',
        imageUrl: case2,
      },
      {
        id: 2,
        title: 'Efficient Task Management',
        description: 'Donec nec tincidunt libero. Sed fermentum eros et nulla hendrerit auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed egestas lectus. Ut tempus auctor neque, ac consequat dui aliquet sed. Cras vel gravida neque. Nam consequat in nisl rhoncus ornare. Maecenas et commodo metus. Nunc posuere neque vel elit ornare laoreet.',
        imageUrl: case3,
      },
      {
        id: 3,
        title: 'Personalized User Experience',
        description: 'Donec ac lorem eget quam feugiat viverra. Etiam tincidunt elit nec nisi consectetur congue. Ut in aliquet quam. Cras at tincidunt est. Donec maximus ex ut dolor egestas, id vehicula orci vulputate. Praesent ac dolor lacinia, laoreet elit nec, hendrerit odio. Donec viverra nisi ut purus vestibulum, aliquam lacinia lorem sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
        imageUrl: case4,
      }
  ];

  const [currentUseCase, setCurrentUseCase] = useState(0);

  const nextUseCase = () => {
    setCurrentUseCase((prev) => (prev + 1) % useCasesData.length);
    
  };
  
  const prevUseCase = () => {
    console.log('Previous use case clicked');
    setCurrentUseCase((prev) => (prev === 0 ? useCasesData.length - 1 : prev - 1));
  };
  
  

  console.log(currentUseCase)
  let currentUseCasesData=useCasesData.find(item=>item.id===currentUseCase)
console.log(currentUseCasesData)
  return (
    <section id="use-cases">
        <h2>Use Cases</h2>
      <div className="use-case-container">
        <button className="arrow-button prev" onClick={prevUseCase}>
          ❮
        </button>
        
         <div className="use-case-content">
            <div className='content'>
                <div className='content1'>
              <h2>{currentUseCasesData.title}</h2>
              <p>{currentUseCasesData.description}</p>
              </div>
              </div>
              <div className='image'>
            <img src={currentUseCasesData.imageUrl} alt={`Use Case ${currentUseCasesData.id+1}`} />
            <img src={currentUseCasesData.imageUrl} alt={`Use Case ${currentUseCasesData.id+1}`} />
            <img src={currentUseCasesData.imageUrl} alt={`Use Case ${currentUseCasesData.id+1}`} />
            </div>
          </div>
        
        <button className="arrow-button next" onClick={nextUseCase}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default UseCases;
