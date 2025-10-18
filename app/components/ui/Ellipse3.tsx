import { FunctionComponent } from 'react';

interface EllipseProps {
  position: 'top-right' | 'bottom-left';
}

const Ellipse3: FunctionComponent<EllipseProps> = ({ position }) => {
  const positionClasses = position === 'top-right' 
    ? 'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2' 
    : 'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2';

  return (
    <div 
      className={`w-64 h-64 sm:w-96 sm:h-96 md:w-128 md:h-128 rounded-full bg-blue-300 ${positionClasses}`}
      style={{
        filter: 'blur(200px)',
        backgroundColor: '#80adf8'
      }}
    />
  );
};

export default Ellipse3;
