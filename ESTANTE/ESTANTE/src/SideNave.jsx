  function SideNav() {
    return (
      <div className="flex h-screen flex-col justify-between border-e bg-white w-64">
    <div className="px-4 py-6">
      <span className="grid h-10 w-32 place-content-center rounded-lg text-xl text-gray-600">
        ESTANTE
      </span>

      <ul className="mt-6 space-y-1">
        <li>
          <label
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-700 hover:text-white"
          >
            HOME
          </label>
        </li>

        <li>
          <label
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-700 hover:text-white"
          >
            OTC
          </label>
        </li>

        <li>
          <label
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-700 hover:text-white"
          >
            ZUELIG
          </label>
        </li>

        <li>
          <label
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-700 hover:text-white"
          >
            UNILAB
          </label>
        </li>

        <li>
          <label
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-700 hover:text-white"
          >
            METRO
          </label>
        </li>

        <li>
        <label
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-700 hover:text-white"
          >
            GENERICS
          </label>
        </li>

        <li>
        <label
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-blue-700 hover:text-white"
          >
            BRANDED
          </label>
        </li>
      </ul>
    </div>
  </div>
    );
  }

  export default SideNav;
