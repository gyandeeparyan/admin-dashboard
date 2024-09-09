"use client";

const Loader = () => {
  return (
    <tr className='animate-pulse bg-zinc-800'>
      <td className='px-10 py-4'>
        <div className='h-4 w-4 bg-zinc-600 rounded'></div>
      </td>
      <td className='px-10 py-4'>
        <div className='h-4 bg-zinc-600 rounded w-3/4'></div>
      </td>
      <td className='px-10 py-4'>
        <div className='h-4 bg-zinc-600 rounded w-full'></div>
      </td>
      <td className='px-10 py-4'>
        <div className='h-4 bg-zinc-600 rounded w-1/2'></div>
      </td>
      <td className='px-10 py-4'>
        <div className='flex space-x-2'>
          <div className='h-8 bg-zinc-600 rounded w-20'></div>
          <div className='h-8 bg-zinc-600 rounded w-20'></div>
        </div>
      </td>
    </tr>
  );
};

export default Loader;
