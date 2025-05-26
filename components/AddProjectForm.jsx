'use client';
import { addProject } from '@/lib/actions';
import { useProject } from '@/context/AllProjectsContext'; // ✅ Import the context

function AddProjectForm({ setLink }) {
  const { fetchProjects } = useProject(); // ✅ Get fetchProjects from context

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    try {
      await addProject(formData);
      await fetchProjects();
      setLink('projects'); // ✅ Refresh project list after adding
      e.target.reset(); // Optional: Reset the form
    } catch (error) {
      console.log('Failed to add project');
    }

    console.log('formdata = ', values);
  }
  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-6 p-6 bg-white shadow-xl rounded-xl border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center">Add New Project</h2>

        <div>
          <label htmlFor="adres" className="block mb-1 font-medium">
            Adres
          </label>
          <input
            required
            type="text"
            name="adres"
            id="adres"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="100"
          />
        </div>

        <div>
          <label htmlFor="zip" className="block mb-1 font-medium">
            Zip
          </label>
          <input
            type="text"
            name="zip"
            id="zip"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="100"
          />
        </div>

        <div>
          <label htmlFor="type" className="block mb-1 font-medium">
            Type
          </label>
          <input
            type="text"
            name="type"
            id="type"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="100"
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-1 font-medium">
            Date
          </label>
          <input
            type="text"
            name="date"
            id="date"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="100"
          />
        </div>

        <div>
          <label htmlFor="text1" className="block mb-1 font-medium">
            Description 1
          </label>
          <textarea
            rows={4}
            name="text1"
            id="text1"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="1000"
          />
        </div>

        <div>
          <label htmlFor="text2" className="block mb-1 font-medium">
            Description 2
          </label>
          <textarea
            rows={4}
            name="text2"
            id="text2"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="1000"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default AddProjectForm;
