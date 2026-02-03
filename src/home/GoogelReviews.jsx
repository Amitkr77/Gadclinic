import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const GOOGLE_API_KEY = "YOUR_ACTUAL_API_KEY_HERE";
const PLACE_ID = "ChIJkVTMdj8FDTkRkuNAfxus_z8";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // We use a proxy or the direct Google Maps URL (Note: CORS might require a proxy in dev)
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div className="py-20 text-center">Loading Patient Feedback...</div>;

  return (
    <section className="py-16 bg-white overflow-hidden border-t">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-black text-blue-900 uppercase">Real Patient Stories</h2>
        <div className="flex justify-center gap-1 mt-2">
           {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
           <span className="ml-2 font-bold text-gray-700">4.9/5 on Google</span>
        </div>
      </div>

      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Loop through real reviews twice for seamless scroll */}
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="flex-shrink-0 w-[400px] bg-slate-50 p-8 rounded-3xl mx-4 border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <img src={review.profile_photo_url} alt={review.author_name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold text-blue-900">{review.author_name}</h4>
                  <p className="text-xs text-gray-500">{review.relative_time_description}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic whitespace-normal leading-relaxed">
                "{review.text.substring(0, 180)}..."
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;