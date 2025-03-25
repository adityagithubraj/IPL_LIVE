import React from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Hardik Pandya Named New Mumbai Indians Captain',
      date: '2024-03-20',
      category: 'Team Updates',
      summary: 'In a surprising move, Mumbai Indians have announced Hardik Pandya as their new captain for IPL 2024, taking over from Rohit Sharma.',
      imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'MS Dhoni Begins Training for IPL 2024',
      date: '2024-03-19',
      category: 'Player News',
      summary: 'Chennai Super Kings captain MS Dhoni has started his preparation for IPL 2024 with intensive training sessions at Chepauk.',
      imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'New Impact Player Rules Announced for IPL 2024',
      date: '2024-03-18',
      category: 'Tournament Updates',
      summary: 'BCCI has announced modified impact player rules for IPL 2024, allowing more tactical flexibility for teams during matches.',
      imageUrl: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Newspaper className="h-8 w-8 text-blue-600" />
        IPL News
      </h1>
      
      <div className="space-y-6">
        {news.map((item) => (
          <div key={item.id} className="card hover:shadow-lg transition-shadow overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              
              <div className="md:w-2/3 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(item.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.summary}
                </p>
                
                <button className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;