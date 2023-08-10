import React from 'react';

const Search = () => {
  return (
    <div class="flex items-center justify-center my-4">
  <form class=" flex items-center justify-center flex-col sm:flex-row w-4/5">
    <input
      type="text"
      placeholder="type your city..."
      class="py-2 px-4 border border-gray-300 rounded-md mb-2 sm:mb-0 sm:mr-2 sm:w-1/2 focus:ring focus:ring-opacity-50 focus:border-gray-800 outline-none"
    />
    <button
      type="submit"
      class="bg-gray-900 text-white py-2 px-4 rounded-md sm:w-auto hover:bg-gray-800 focus:ring focus:ring-opacity-50 focus:outline-none"
    >
      Search
    </button>
  </form>
</div>

  )
}

export default Search;