export default function IconsPage() {
  return (
    <div className="p-10 grid grid-cols-8 gap-6">
      {Array.from({ length: 128 }).map((_, i) => {
        const name = `ns-shape-${i + 1}`;
        return (
          <div
            key={name}
            className="flex flex-col items-center gap-2 border p-3 rounded"
          >
            <span className={`${name} text-4xl`} />
            <span className="text-xs text-gray-500">{name}</span>
          </div>
        );
      })}
    </div>
  );
}


// 'use client';

// import {
//   ProjectAchievementCheckIcon,
//   ProjectTeamMembersIcon,
//   ProjectSatisfiedClientsIcon,
// } from '@/icons';

// export default function IconsTest() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-10 flex gap-10">
//       <ProjectAchievementCheckIcon />
//       <ProjectTeamMembersIcon />
//       <ProjectSatisfiedClientsIcon />
//     </div>
//   );
// }


// import * as Icons from '@/icons'; // path sende nasıl ise

// const IconGallery = () => {
//   return (
//     <div className="grid grid-cols-6 gap-6 p-10">
//       {Object.entries(Icons).map(([name, Icon]) => (
//         <div
//           key={name}
//           className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center"
//         >
//           {/* bazı iconlar className alıyor */}
//           {/* @ts-ignore */}
//           <Icon className="w-6 h-6" />
//           <span className="text-xs text-gray-500">{name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default IconGallery;
