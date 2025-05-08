import React, { useState } from 'react'

const Duyuru = () => {
      const [duyuruMetni, setDuyuruMetni] = useState("");

      const [aktiviteFotograflari, setAktiviteFotograflari] = useState([]);
  return (
    <div>
            <div className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Duyurular</h2>
            <textarea
              value={duyuruMetni}
              onChange={(e) => setDuyuruMetni(e.target.value)}
              className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Yeni duyuru ekle..."
            />
            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full">
              Duyuruyu Yayınla
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Duyuru
