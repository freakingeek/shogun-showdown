export default function Profile() {
  return (
    <div className="flex gap-x-2 bg-dark py-2 px-4 rounded-lg">
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md shrink-0">
        <img
          src="/assets/images/profile.png"
          alt="Avatar of Yasin Silavi"
          className="rounded-md"
        />
      </div>

      <div className="w-40 truncate text-secondary">
        <h3 className="text-white">Yasin Silavi</h3>
        <span className="text-xs">ys.silavi@gmail.com</span>
      </div>
    </div>
  );
}
