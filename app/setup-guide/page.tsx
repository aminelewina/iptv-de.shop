import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Tv, Smartphone, Monitor, PlaySquare, HelpCircle, ArrowRight } from "lucide-react"
import { howToSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Complete IPTV Setup Guide: Install on Any Device (2025)",
  description:
    "Step-by-step instructions for setting up IPTV on Android TV, Fire Stick, Smart TVs, iOS, Apple TV, and computers. Easy installation guides for all devices.",
}

export default function SetupGuidePage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <main className="pt-20 bg-gray-900 text-white min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-black">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <Image
              src="/digital-stream-red-flow.png"
              alt="Digitaler Datenstrom für IPTV-Setup - visuelle Darstellung der Streaming-Technologie"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Complete IPTV Setup Guide</h1>
            <p className="text-xl md:text-2xl text-center text-gray-300 mb-8">
              Install on Any Device <span className="text-red-500 font-semibold">(2025)</span>
            </p>
            <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <p className="text-lg">
                Welcome to your comprehensive guide for setting up IPTV on your favorite devices! Setting up your IPTV
                service is usually straightforward. Below, you'll find step-by-step instructions for the most popular
                devices used for streaming IPTV content.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="sticky top-16 z-30 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-3 px-4 w-full">
          <div className="container mx-auto">
            <div className="flex items-center justify-start overflow-x-auto scrollbar-hide gap-4 pb-1">
              <a
                href="#before-you-begin"
                className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
              >
                Before You Begin
              </a>
              <a
                href="#android-tv"
                className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
              >
                Android TV
              </a>
              <a
                href="#fire-tv"
                className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
              >
                Fire TV
              </a>
              <a
                href="#smart-tvs"
                className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
              >
                Smart TVs
              </a>
              <a
                href="#ios"
                className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
              >
                iOS
              </a>
              <a
                href="#apple-tv"
                className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
              >
                Apple TV
              </a>
              <a
                href="#pc-mac"
                className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
              >
                PC/Mac
              </a>
              <a
                href="#troubleshooting"
                className="text-sm whitespace-nowrap px-3 py-1.5 rounded-full bg-gray-800 hover:bg-red-900/50 hover:text-white transition-colors"
              >
                Troubleshooting
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Before You Begin Section */}
          <section id="before-you-begin" className="mb-16">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <HelpCircle size={24} />
              </div>
              <h2 className="text-3xl font-semibold">Before You Begin</h2>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1">
                    <ArrowRight size={16} className="text-red-500" />
                  </div>
                  <div>
                    <p>
                      Ensure you have a stable internet connection. We recommend a minimum speed of 15-25 Mbps for
                      smooth HD streaming and higher for 4K content.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1">
                    <ArrowRight size={16} className="text-red-500" />
                  </div>
                  <div>
                    <p>
                      Have your IPTV subscription details ready. After ordering from your provider, you typically
                      receive either:
                    </p>
                    <ul className="list-disc pl-10 mt-2 space-y-1 text-gray-300">
                      <li>An M3U Playlist URL (and sometimes a separate EPG URL).</li>
                      <li>Xtream Codes API details (Username, Password, and Server URL/Portal).</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1">
                    <ArrowRight size={16} className="text-red-500" />
                  </div>
                  <div>
                    <p>You will need to install an IPTV player application on most devices.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Device Setup Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Android TV */}
            <div
              id="android-tv"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <Tv size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold">1. Android TV Boxes & Google TV</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-300">
                    These devices offer flexibility with numerous IPTV player apps available on the Google Play Store.
                    Popular choices include TiviMate, IPTV Smarters Pro, Perfect Player, GSE Smart IPTV, and OTT
                    Navigator.
                  </p>
                </div>

                <h3 className="text-xl font-medium mb-4 text-red-400">
                  General Steps (using typical apps like IPTV Smarters Pro):
                </h3>

                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex">
                      <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Install an IPTV Player</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Open the Google Play Store on your device, search for your desired IPTV player app (e.g.,
                          "IPTV Smarters Pro"), and install it.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex">
                      <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Open the App</p>
                        <p className="text-sm text-gray-300 mt-1">Launch the installed player app.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex">
                      <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Add User/Playlist</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Look for an option like "Add User," "Add Playlist," or "+".
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex">
                      <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Choose Login Method</p>
                        <p className="text-sm text-gray-300 mt-1">
                          You will usually be prompted to choose between "Load Your Playlist or File/URL" (for M3U) or
                          "Login with Xtream Codes API".
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="border border-red-900/50 rounded-lg p-4 bg-red-900/10">
                    <h4 className="font-medium mb-2">If using M3U URL:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Select "Load Your Playlist" or "Add M3U URL".</li>
                      <li>Enter a Playlist Name (e.g., "My IPTV").</li>
                      <li>Select "M3U URL".</li>
                      <li>Carefully enter the M3U Playlist URL provided in your subscription details.</li>
                      <li>
                        If you have a separate EPG URL, there might be an option to add it here or later in the app
                        settings.
                      </li>
                      <li>Click "Add User" or "Save".</li>
                    </ul>
                  </div>

                  <div className="border border-red-900/50 rounded-lg p-4 bg-red-900/10">
                    <h4 className="font-medium mb-2">If using Xtream Codes API:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Select "Login with Xtream Codes API".</li>
                      <li>Enter a Playlist Name (e.g., "My IPTV").</li>
                      <li>
                        Carefully enter the Username, Password, and Server/Portal URL provided in your subscription
                        details.
                      </li>
                      <li>Click "Add User" or "Login".</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex">
                      <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Loading Content</p>
                        <p className="text-sm text-gray-300 mt-1">
                          The app will now attempt to load the channels and VOD content associated with your
                          subscription. This may take a minute or two.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex">
                      <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        6
                      </div>
                      <div>
                        <p className="font-medium">Enjoy</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Once loaded, you can navigate through the channels and VOD library.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fire TV */}
            <div
              id="fire-tv"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <PlaySquare size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold">2. Amazon Fire TV Stick / Fire Cube</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-300">
                    Setting up IPTV on Fire TV devices is similar to Android TV, but you might need to install apps via
                    the Amazon Appstore or sideload them using the "Downloader" app.
                  </p>
                </div>

                <h3 className="text-xl font-medium mb-4 text-red-400">Steps:</h3>

                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex">
                      <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Allow Apps from Unknown Sources (if sideloading)</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
                          <li>
                            Go to Settings {">"} My Fire TV {">"} Developer Options.
                          </li>
                          <li>
                            Turn ON Apps from Unknown Sources. (If you don't see Developer Options, go to Settings {">"}{" "}
                            My Fire TV {">"} About, then click on your Fire TV Stick name about 7 times).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex">
                      <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Install IPTV Player</p>
                        <div className="mt-2 space-y-3">
                          <div className="border-l-2 border-red-500 pl-3">
                            <p className="font-medium text-sm">Option A (Amazon Appstore):</p>
                            <p className="text-sm text-gray-300">
                              Search the Appstore for compatible players like "IPTV Smarters Player" or others if
                              available.
                            </p>
                          </div>

                          <div className="border-l-2 border-red-500 pl-3">
                            <p className="font-medium text-sm">Option B (Sideloading via Downloader):</p>
                            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-300">
                              <li>Install the "Downloader" app from the Amazon Appstore.</li>
                              <li>
                                Open Downloader and enter the direct download URL (APK link) for your chosen player
                                (e.g., IPTV Smarters Pro, TiviMate). You might need to search online for the official
                                APK download links for these apps.
                              </li>
                              <li>Download and install the APK file.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex">
                      <div className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Configure the Player</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
                          <li>Open the IPTV player app you installed.</li>
                          <li>
                            Follow the same steps as outlined in the Android TV section above (steps 3-6) to add your
                            playlist using either the M3U URL or Xtream Codes API details provided with your
                            subscription.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart TVs */}
          <section id="smart-tvs" className="mb-16">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Tv size={24} />
              </div>
              <h2 className="text-3xl font-semibold">3. Smart TVs (Samsung Tizen / LG WebOS)</h2>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <p className="mb-4">
                Newer Samsung and LG Smart TVs use their own operating systems (Tizen and WebOS). Setup often involves
                installing an IPTV player app from their respective app stores and sometimes activating the app via a
                web portal using the TV's MAC address.
              </p>

              <div className="bg-black/30 p-4 rounded-lg mb-6">
                <p className="font-medium mb-2">Common Apps:</p>
                <p className="text-gray-300">
                  Look for apps like "IPTV Smarters Player", "SET IPTV", "NET IPTV", "IBO Player", "Flix IPTV" in the
                  Samsung App Store or LG Content Store. Note: Some of these apps (like SET, NET, IBO) may require a
                  separate one-time activation fee paid directly to the app developer, not your IPTV provider.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-red-900/30 rounded-lg overflow-hidden">
                  <div className="bg-red-900/20 p-3">
                    <h3 className="text-xl font-medium text-white">Method 1: Using apps like IPTV Smarters Player</h3>
                  </div>
                  <div className="p-4">
                    <ol className="space-y-2">
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          1
                        </span>
                        <span>Install the player app from your TV's app store.</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          2
                        </span>
                        <span>Launch the app.</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          3
                        </span>
                        <span>
                          Follow the on-screen instructions, which will typically ask you to choose between logging in
                          with M3U URL or Xtream Codes API.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          4
                        </span>
                        <span>Enter the subscription details provided to you carefully.</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          5
                        </span>
                        <span>The app should load your channels and VOD.</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="border border-red-900/30 rounded-lg overflow-hidden">
                  <div className="bg-red-900/20 p-3">
                    <h3 className="text-xl font-medium text-white">
                      Method 2: Using apps requiring MAC Address upload
                    </h3>
                  </div>
                  <div className="p-4">
                    <ol className="space-y-2">
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          1
                        </span>
                        <span>Install the chosen IPTV app from your TV's app store.</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          2
                        </span>
                        <span>
                          Launch the app. It will usually display your TV's MAC Address or a Device ID/Key. Note this
                          down carefully.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          3
                        </span>
                        <span>
                          On a computer or phone, go to the website portal specified by the app (e.g., the setup website
                          for SET IPTV, NET IPTV, or IBO Player).
                        </span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          4
                        </span>
                        <span>Find the section to add/upload a playlist.</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          5
                        </span>
                        <span>
                          Enter your TV's MAC Address/Device ID and the M3U Playlist URL provided with your
                          subscription. You might also be able to add an EPG URL.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          6
                        </span>
                        <span>Submit or upload the playlist.</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          7
                        </span>
                        <span>Restart the IPTV app on your TV. Your playlist should now load.</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* iOS and Apple TV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* iOS */}
            <div
              id="ios"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <Smartphone size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold">4. iOS (iPhone / iPad)</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-300">
                    Numerous IPTV player apps are available on the Apple App Store. Popular choices include GSE Smart
                    IPTV, IPTV Smarters Player, and others.
                  </p>
                </div>

                <h3 className="text-xl font-medium mb-4 text-red-400">General Steps:</h3>

                <div className="space-y-3">
                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-medium">Install Player</p>
                      <p className="text-sm text-gray-300">
                        Download and install an IPTV player from the App Store (e.g., "GSE Smart IPTV").
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-medium">Open App</p>
                      <p className="text-sm text-gray-300">Launch the player.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-medium">Add Playlist</p>
                      <p className="text-sm text-gray-300">
                        Navigate to the menu (often top-left) and find "Remote Playlists" or a similar option.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </span>
                    <div>
                      <p className="font-medium">Tap '+'</p>
                      <p className="text-sm text-gray-300">Click the '+' icon to add a new playlist.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      5
                    </span>
                    <div>
                      <p className="font-medium">Choose Method</p>
                      <p className="text-sm text-gray-300">Select "Add M3U URL" or "Add Xtream-Codes API".</p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      6
                    </span>
                    <div>
                      <p className="font-medium">For M3U</p>
                      <p className="text-sm text-gray-300">Enter a name, paste your M3U Playlist URL, and save/add.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      7
                    </span>
                    <div>
                      <p className="font-medium">For Xtream Codes</p>
                      <p className="text-sm text-gray-300">
                        Enter a name, paste the Server URL, Username, and Password from your subscription details, and
                        save/add.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      8
                    </span>
                    <div>
                      <p className="font-medium">Select Playlist</p>
                      <p className="text-sm text-gray-300">
                        Tap on the newly added playlist name to load and view channels/VOD.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Apple TV */}
            <div
              id="apple-tv"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <Tv size={24} className="mr-3" />
                <h2 className="text-2xl font-semibold">5. Apple TV (tvOS)</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-300">
                    Similar to iOS, you'll use apps from the tvOS App Store. Options include iPlayTV, GSE Smart IPTV,
                    IPTV Smarters Player, among others.
                  </p>
                </div>

                <h3 className="text-xl font-medium mb-4 text-red-400">General Steps:</h3>

                <div className="space-y-3">
                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-medium">Install Player</p>
                      <p className="text-sm text-gray-300">
                        Open the App Store on your Apple TV, search for, and install your chosen IPTV player.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-medium">Open App</p>
                      <p className="text-sm text-gray-300">Launch the player.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-medium">Add Playlist</p>
                      <p className="text-sm text-gray-300">Look for an option to "Add Playlist," "+," or similar.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </span>
                    <div>
                      <p className="font-medium">Choose Method</p>
                      <p className="text-sm text-gray-300">Select Add via M3U URL or Xtream Codes API.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      5
                    </span>
                    <div>
                      <p className="font-medium">Enter Details</p>
                      <p className="text-sm text-gray-300">
                        Carefully input the M3U URL or the Username, Password, and Server URL provided with your
                        subscription.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                      6
                    </span>
                    <div>
                      <p className="font-medium">Load and Watch</p>
                      <p className="text-sm text-gray-300">Save the details. The app will load your content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PC/Mac */}
          <section id="pc-mac" className="mb-16">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Monitor size={24} />
              </div>
              <h2 className="text-3xl font-semibold">6. Windows PC / macOS</h2>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <p className="mb-6">You can use dedicated IPTV players or versatile media players like VLC.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-red-900/30 rounded-lg overflow-hidden">
                  <div className="bg-red-900/20 p-3">
                    <h3 className="text-xl font-medium text-white">Method 1: Using VLC Media Player</h3>
                    <p className="text-sm text-gray-300">(Requires M3U URL)</p>
                  </div>
                  <div className="p-4">
                    <ol className="space-y-2">
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          1
                        </span>
                        <span>Install VLC from the official VideoLAN website if you don't have it.</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          2
                        </span>
                        <span>Launch the application.</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          3
                        </span>
                        <div>
                          <p>Open Network Stream:</p>
                          <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-300">
                            <li>On Windows: Go to Media {">"} Open Network Stream.</li>
                            <li>On macOS: Go to File {">"} Open Network.</li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          4
                        </span>
                        <span>Paste your M3U Playlist URL into the network URL field.</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          5
                        </span>
                        <span>Click "Play" (Windows) or "Open" (macOS).</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          6
                        </span>
                        <span>
                          Your channel list should appear in the VLC playlist view (toggle with Ctrl+L on Windows or
                          Cmd+Option+P on macOS). Double-click a channel to watch.
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="border border-red-900/30 rounded-lg overflow-hidden">
                  <div className="bg-red-900/20 p-3">
                    <h3 className="text-xl font-medium text-white">Method 2: Using Dedicated IPTV Players</h3>
                    <p className="text-sm text-gray-300">(e.g., IPTV Smarters Pro for Desktop)</p>
                  </div>
                  <div className="p-4">
                    <ol className="space-y-2">
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          1
                        </span>
                        <span>
                          Search for IPTV player applications compatible with Windows or macOS (e.g., "IPTV Smarters Pro
                          for Windows/macOS"). Download and install from the official source.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          2
                        </span>
                        <span>
                          Open the application. It will typically prompt you to add your playlist via M3U URL or Xtream
                          Codes API.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          3
                        </span>
                        <span>
                          Follow the on-screen prompts, carefully entering the subscription details provided to you.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                          4
                        </span>
                        <span>The application will load your channels and VOD content.</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-16">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <HelpCircle size={24} />
              </div>
              <h2 className="text-3xl font-semibold">Troubleshooting Tips</h2>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex">
                    <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1">
                      <ArrowRight size={16} className="text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Check Credentials</p>
                      <p className="text-sm text-gray-300 mt-1">
                        Double-check that you have entered the M3U URL or Xtream Codes details exactly as provided. They
                        are case-sensitive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex">
                    <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1">
                      <ArrowRight size={16} className="text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Check Internet</p>
                      <p className="text-sm text-gray-300 mt-1">
                        Ensure your device has a stable internet connection. Restart your modem/router if needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex">
                    <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1">
                      <ArrowRight size={16} className="text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Restart Device/App</p>
                      <p className="text-sm text-gray-300 mt-1">
                        Try closing the IPTV player app completely and restarting it. Sometimes, restarting the device
                        itself can help.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex">
                    <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1">
                      <ArrowRight size={16} className="text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Update App</p>
                      <p className="text-sm text-gray-300 mt-1">
                        Ensure your IPTV player app is updated to the latest version.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 p-4 rounded-lg md:col-span-2">
                  <div className="flex">
                    <div className="bg-red-600/20 p-2 rounded-full mr-3 mt-1">
                      <ArrowRight size={16} className="text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Contact Support</p>
                      <p className="text-sm text-gray-300 mt-1">
                        If you've verified your details and connection but still face issues, please contact your IPTV
                        service provider for assistance with your specific subscription.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-xl p-8 text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Streaming?</h2>
            <p className="mb-6">
              Get your IPTV subscription today and enjoy thousands of channels on your favorite devices.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-red-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
