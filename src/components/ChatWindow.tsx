import ChatBubble from "./ChatBubble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import firstImage from "../assets/img/ultah.png";
import secondImage from "../assets/img/poster.png";
import avatarImage from "../assets/img/avatar.png";

const ChatWindow = () => {
  return (
    <div className="flex flex-col h-full max-h-[550px] w-full text-black bg-white font-IGReg">
      {/* Header */}
      <div className="flex items-center justify-between bg-white py-3 px-5 border-b border-gray-200">
        <span className="flex items-center gap-4">
          <FontAwesomeIcon icon={faArrowLeft} size="xs" />
          <div className="flex items-center">
            <img
              src={avatarImage}
              alt="Profile"
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="text-left font-IGBold text-sm">
              Mayke Law Deryuke Si..
            </div>
          </div>
        </span>
        <span className="flex gap-4">
          <svg
            aria-label="Audio call"
            color="black"
            fill="black"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Audio call</title>
            <path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z"></path>
          </svg>
          <svg
            aria-label="Video call"
            color="black"
            fill="black"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Video call</title>
            <rect
              fill="none"
              height="18"
              rx="3"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              width="16.999"
              x="1"
              y="3"
            ></rect>
            <path
              d="m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </span>
      </div>
      {/* Chat messages */}
      <div className="flex-1 p-3 overflow-y-auto text-left">
        <div className="text-xs text-gray-400 text-center">28 Apr 2022</div>
        <ChatBubble
          content=""
          isFromMe={false}
          replyImage={firstImage}
          avatarIcon={true}
        />
        <ChatBubble
          content="Happy birthday Billy..
        Kiranya Tuhan berkati kuliah dan
        segala yang sedang kamu kerjakan skrang. 
        Jesus loves you ✨😇"
          isFromMe={false}
        />
        <ChatBubble content="thank you mbaa, GBU" isFromMe={true} />
        <ChatBubble content="Kamu udah di Surabaya ta bil??" isFromMe={false} />
        <ChatBubble content="udah dongg" isFromMe={true} />
        <ChatBubble
          content="udah merasakan panasnya dan
          derasnya hujan sini"
          isFromMe={true}
        />
        <ChatBubble content="Wkwkkw" isFromMe={false} avatarIcon={true} />
        <ChatBubble
          content='Ehhh billy asli manaa?? Kaka lupa
          sorry :")'
          isFromMe={false}
        />
        <ChatBubble content="asli tangerang aku" isFromMe={true} />
        <ChatBubble
          content="panas juga, tapi ga sepanas sini :')"
          isFromMe={true}
        />
        <ChatBubble
          content="Wkwkwk parah sih panasnya di SBY"
          isFromMe={false}
          avatarIcon={true}
        />
        <ChatBubble content="Trus liburan ini kamu balik ??" isFromMe={false} />
        <ChatBubble
          content='engga sih, aku stay disini aja
        bareng roommate aku maen",
        kaloga ntar pulkam ke pati'
          isFromMe={true}
        />
        <ChatBubble
          content="Hooo iya sih juga liburnya cuma
        seminggu aja"
          isFromMe={false}
        />
        <ChatBubble
          content="Ehh ini kakak baru tau banget
        klw kamu di SBY dan tiba2 hatiku
        pengen ajak kamu dong wkwkwk
        CG Onsite tanggal 29 April besok
        jam 7 malem... kamu kosong ta
        bil???"
          isFromMe={false}
        />
        <ChatBubble
          content="CG onsite? CG apa? community
        gathering?"
          isFromMe={true}
        />
        <ChatBubble
          content="Hoo nice question yaa...
          CG itu kaya kelompok kecil bill...
          tapi ini dari Gereja mawar sharon,
          Kita kumpul bareng sma beberapa
          anak youth...
          nah di CG itu kita ngapain ?,
          ada pujian penyembahan, saling
          mendoakan dan ada sharing juga."
          isFromMe={false}
          avatarIcon={true}
        />
        <ChatBubble
          content=""
          isFromMe={false}
          image={secondImage}
          avatarIcon={true}
        />
        <ChatBubble
          content="CG itu singkatan Connect Group 🤭"
          isFromMe={false}
        />
        <ChatBubble
          content="Dan yang ikut besok itu anak2 unair
          juga...
          Jadi besok itu CG onsite perdana
          setelah tahun 2020, krn pandemik
          jadinya yang lalu2 kita CG hanya
          by Zoom. Tapi skrang krn semua
          sudah normal, jadi perdana kita
          ngadain CG offline"
          isFromMe={false}
          avatarIcon={true}
        />
        <ChatBubble
          content="Untuk lokasinya itu di Pakuwon city mall lantai 2"
          isFromMe={false}
        />
        <ChatBubble
          content="owhh okay, aku gatau sih besok ada
          acara ato engga, harusnya free"
          isFromMe={true}
        />
        <ChatBubble content="aku usahain bisa dateng :D" isFromMe={true} />
        <ChatBubble
          content="Besok acaranya jam 7 malem...
        klw kamu mau ajak temen biar ga
        sendiri juga boleh kok"
          isFromMe={false}
          avatarIcon={true}
        />
        <ChatBubble
          content="Bisaa pasti 🤭"
          isFromMe={false}
          replyTo="Aku usahain bisa dateng :D"
        />
        <ChatBubble content="okeyy" isFromMe={true} />
        <ChatBubble
          content="Okayy see ya... kabarin kk bsok ya
        bill ✨"
          isFromMe={false}
        />
        <ChatBubble content="yaa" isFromMe={true} />
      </div>

      {/* Input field */}
      <div className="bg-white p-3 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-full outline-none bg-gray-100 rounded-full py-3 px-5 flex justify-between">
            <span className="opacity-60">
              <p className="text-sm">Message...</p>
            </span>
            <span className="flex gap-3">
              <svg
                aria-label="Add Photo or Video"
                color="black"
                fill="black"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Add Photo or Video</title>
                <path
                  d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z"
                  fill-rule="evenodd"
                ></path>
                <path
                  d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
              <svg
                aria-label="Like"
                color="black"
                fill="black"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Like</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatWindow;
