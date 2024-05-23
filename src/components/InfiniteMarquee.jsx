import { useEffect } from 'react';

const InfiniteMarquee = ({ children, speed }) => {
  useEffect(() => {
    const marqueeElement = document.getElementById('infinite-marquee');

    const resetMarqueePosition = () => {
      if (marqueeElement.scrollLeft >= marqueeElement.scrollWidth - marqueeElement.clientWidth) {
        marqueeElement.scrollLeft = 0;
      }
    };

    const marqueeInterval = setInterval(() => {
      marqueeElement.scrollLeft += 2; // Adjust scroll speed as needed
      resetMarqueePosition();
    }, speed);

    return () => clearInterval(marqueeInterval);
  }, [speed]);

  return (
    <div id="infinite-marquee" className="transform -skew-y-6 bg-black z-30 absolute top-0 left-0 right-0 overflow-hidden">
      {children}
    </div>
  );
};

export default InfiniteMarquee;
