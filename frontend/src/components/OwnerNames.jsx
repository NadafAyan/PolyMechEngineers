import { UserIcon } from '@heroicons/react/24/solid';

export default function OwnerNames() {
  const team = [
    {
      name: 'Mr. Dhananjay B. Patil (B.E.)',
      title: 'Founder',
    },
    {
      name: 'Mr. Mansing D. Patil (B.E.)',
      title: 'Chief Engineer',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center p-6 bg-[#EEF6FA]  shadow-sm max-w-full mx-auto">
      {team.map((person, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white rounded-lg p-6 border border-gray-200 shadow-md w-full md:w-1/2"
        >
          <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <UserIcon className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
          <p className="text-sm text-gray-700">{person.title}</p>
        </div>
      ))}
    </div>
  );
}
