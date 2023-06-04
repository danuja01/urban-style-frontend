const Testimonial = () => {
  return (
    <div className="testimonial">
      <div>
        <p>Testimonials</p>
        <h2>What People Say About Us.</h2>
        <div class="testimonial-pagination">
          <span class="dot"></span>
          <span class="dot backward"></span>
          <span class="dot backward"></span>
        </div>
      </div>
      <div>
        <div>
          <img src="https://picsum.photos/200/300" alt="testimonial" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptatibus voluptas
              quod quas doloribus quidem voluptatem? Quisquam
            </p>
            <h3>John Doe</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
