"use client";

const Loader = () => {
  return (
    
    <tr className='animate-pulse bg-zinc-800 w-full rounded-2xl'>
      
      <td className='px-10 py-4'>
        <div className='h-6 w-6 bg-zinc-600 rounded'></div>
      </td>
      <td className='px-10 py-4'>
        <div className='h-8 bg-zinc-600 rounded w-40'></div>
      </td>
      <td className='px-10 py-4'>
        <div className='h-8 bg-zinc-600 rounded w-40'></div>
      </td>
      <td className='px-10 py-4'>
        <div className='h-8 bg-zinc-600 rounded w-40'></div>
      </td>
      <td className='px-10 py-4'>
        <div className='flex space-x-2'>
          <div className='h-8 bg-zinc-600 rounded w-24'></div>
          <div className='h-8 bg-zinc-600 rounded w-24'></div>
        </div>
      </td>
    </tr>
  );
};

export default Loader;
