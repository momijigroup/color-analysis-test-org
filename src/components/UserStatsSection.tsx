import React from 'react';

const UserStatsSection = () => (
  <section className="w-full flex justify-center py-12">
    <div className="w-full max-w-4xl bg-[#FFF1EE] rounded-2xl px-6 py-10 flex flex-col items-center shadow-sm">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-6 w-full">
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">355,000+</span>
          <span className="text-base text-gray-600 mt-1">Users</span>
        </div>
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">4.9/5</span>
          <span className="text-base text-gray-600 mt-1">Average Rating</span>
        </div>
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">98%</span>
          <span className="text-base text-gray-600 mt-1">Satisfaction Rate</span>
        </div>
      </div>
      <div className="text-center text-gray-700 text-lg max-w-2xl">
        Professional color analysis services trusted by thousands of users worldwide for enhanced appearance and presentation.
      </div>
    </div>
  </section>
);

export default UserStatsSection;