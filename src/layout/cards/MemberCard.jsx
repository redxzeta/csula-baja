import "./cards.css";
const MemberCard = () => (
  <div class=" font-display ">
    <div class="flex  w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="w-1/3 flex-none relative ">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="aoij"
          src="https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg"
          //   src="https://www.calstatela.edu/sites/default/files/groups/Baja%20SAE/teamMembers/chrisbachman.jpg"
        />
      </div>
      <div class="w-2/3 ">
        <div className="w-full p-4 bg-secondary h-24">
          <h1 class="text-yellow font-bold md:text-base lg:text-2xl">
            ​Captain Doggo
          </h1>
          <p className="md:text-xs lg:text-sm text-yellow">
            Dog Treat Engineering Department
          </p>
        </div>
        <div className="w-full p-4 bg-darkWhite">
          <p class="text-gray-600 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa
          </p>

          <div class="flex item-center justify-between mt-3">
            <button class="px-3 py-2 bg-secondary tracking-wider text-yellow text-xs font-bold uppercase rounded">
              Link
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default MemberCard;
