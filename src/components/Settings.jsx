import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";
import { TfiLayersAlt } from "react-icons/tfi";

const Settings = () => {
    const [activeSection, setActiveSection] = useState(null);

    const [translationFontSize, setTranslationFontSize] = useState(18);
    const [arabicFontSize, setArabicFontSize] = useState(26);
    const [selectedArabicScript, setSelectedArabicScript] = useState("Uthmani");
    const [selectedArabicFont, setSelectedArabicFont] = useState("Me Quran");

    const handleSectionToggle = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="h-full w-full">
            <div className="h-full shadow-sm z-30 p-5 w-full max-h-screen">
                <h2 className="text-xl text-center font-bold">Settings</h2>

                <div className="mt-5">
                    <div className="p-4 border-b">
                        <h3
                            className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5"
                            onClick={() => handleSectionToggle("language")}
                        >
                            <IoLanguage></IoLanguage>
                            Language Settings
                        </h3>
                        {activeSection === "language" && (
                            <div className="flex gap-4 p-4">
                                <button className="px-4 py-2 bg-green-600 text-white rounded">
                                    English
                                </button>
                                <button className="px-4 py-2 bg-white border rounded">
                                    বাংলা
                                </button>
                            </div>
                        )}
                    </div>
                    {/* general setting */}
                    <div className="p-4 border-b text-gray-500">
                        <p
                            className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5"
                            onClick={() => handleSectionToggle("general")}
                        >
                            <TfiLayersAlt />
                            General Settings
                        </p>
                        {activeSection === "general" && (
                            <div className="p-4">
                                <div className="flex items-center">
                                    <input type="checkbox" id="showArabic" className="mr-2" />
                                    <label htmlFor="showArabic" className="text-gray-700">
                                        Show Arabic
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="showTranslation"
                                        className="mr-2"
                                    />
                                    <label
                                        htmlFor="showTranslation"
                                        className="text-gray-700"
                                    >
                                        Show Translation
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="showTransliteration"
                                        className="mr-2"
                                        defaultChecked
                                    />
                                    <label
                                        htmlFor="showTransliteration"
                                        className="text-gray-700"
                                    >
                                        Show Transliteration
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="showReference"
                                        className="mr-2"
                                        defaultChecked
                                    />
                                    <label htmlFor="showReference" className="text-gray-700">
                                        Show Reference
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 border-b text-gray-500">
                        <p
                            className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5"
                            onClick={() => handleSectionToggle("font")}
                        >
                            {" "}
                            <AiOutlineAppstore />
                            Font Settings
                        </p>
                        {activeSection === "font" && (
                            <div className="mt-4 p-4">
                                {/* Translation Font Size */}
                                <div>
                                    <label className="text-gray-700 block mb-2">
                                        Translation Font Siz
                                    </label>
                                    <div className="flex items-center justify-center gap-4">
                                        <input
                                            type="range"
                                            min="10"
                                            max="40"
                                            value={translationFontSize}
                                            onChange={(e) =>
                                                setTranslationFontSize(e.target.value)
                                            }
                                            className="w-full"
                                        />
                                        <div className="text-green-600 font-semibold mt-2 text-center">
                                            {translationFontSize}
                                        </div>
                                    </div>
                                </div>

                                {/* Select Arabic Script */}
                                <div>
                                    <label className="text-gray-700 block mb-2">
                                        Select Arabic Script
                                    </label>
                                    <select
                                        value={selectedArabicScript}
                                        onChange={(e) =>
                                            setSelectedArabicScript(e.target.value)
                                        }
                                        className="w-full px-3 py-2 border rounded"
                                    >
                                        <option value="Uthmani">Uthmani</option>
                                        <option value="IndoPak">IndoPak</option>
                                    </select>
                                </div>

                                {/* Arabic Font */}
                                <div>
                                    <label className="text-gray-700 block mb-2">
                                        Arabic Font
                                    </label>
                                    <select
                                        value={selectedArabicFont}
                                        onChange={(e) => setSelectedArabicFont(e.target.value)}
                                        className="w-full px-3 py-2 border rounded"
                                    >
                                        <option value="KFGQ">KFGQ</option>
                                        <option value="Me Quran">Me Quran</option>
                                        <option value="Al Mushaf">Al Mushaf</option>
                                        <option value="Amiri Quran">Amiri Quran</option>
                                    </select>
                                </div>

                                {/* Arabic Font Size */}
                                <div>
                                    <label className="text-gray-700 block mb-2">
                                        Arabic Font Size
                                    </label>
                                    <div className="flex gap-4">
                                        <input
                                            type="range"
                                            min="10"
                                            max="40"
                                            value={arabicFontSize}
                                            onChange={(e) => setArabicFontSize(e.target.value)}
                                            className="w-full"
                                        />
                                        <div className="text-green-600 font-semibold mt-2">
                                            {arabicFontSize}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="p-4 text-gray-500">
                        <p
                            className="hover:text-green-600 text-lg font-medium cursor-pointer flex items-center gap-5"
                            onClick={() => handleSectionToggle("appearance")}
                        >
                            <AiOutlineAppstore /> Appearance Settings
                        </p>
                        {activeSection === "appearance" && (
                            <div className="p-4">
                                <div className="flex items-center justify-between gap-4 pt-5">
                                    <span>Night Mode</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-600 peer-checked:after:translate-x-5 peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                                    </label>
                                </div>
                                <div></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;