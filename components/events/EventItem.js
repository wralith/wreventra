import { useRouter } from 'next/router'

function EventItem(props) {
  const router = useRouter();

  const handleShowDetails = () => {
    router.push('/' + props.id)
  }

  return (
    <li className="flex border hover:border-red-500 border-transparent w-[90%] md:w-[45%] xl:w-[30%] hover:scale-105 transition-all flex-col items-center justify-between gap-5 rounded-md bg-gray-800/50 p-5 text-gray-100 h-[38rem]">
      <h2 className="mt-3 p-3">{props.title}</h2>
      <img className='rounded-sm' src={props.image} alt={`${props.title}-img`} width='90%' height={200}/>
      <p className="mt-6 mb-3 p-2 ">{props.description}</p>
      <button className='btn-primary' onClick={handleShowDetails}>Show Details</button>
    </li>
  );
}

export default EventItem;
