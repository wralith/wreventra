function EventDetail(props) {
  return (
    <section id={props.id} className='bg-gray-800/50 text-gray-200 flex flex-col items-center gap-2 p-3 pb-16 w-[90%] lg:w-3/4 m-auto mt-9'>
      <h1 className="m-6 p-5 border-b-2 border-red-500 border-dashed">{props.title}</h1>
      <img
        className="rounded-md"
        src={props.image}
        alt={`${props.title}-img`}
        height={500}
        width={600}
      />
      <p className="mt-6 mb-3 p-2 ">{props.description}</p>
      <address>{props.address}</address>
      <p>{props.date}</p>
      <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4  mt-12">
        <button className="btn-primary w-1/3 border-l-4 border-gray-400">Apply</button>
        <button className="btn-primary w-1/3">Favorite</button>
        <button className="btn-primary w-1/3 border-r-4 border-gray-400">Share</button>
      </div>
    </section>
  );
}

export default EventDetail;
