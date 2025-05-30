const PostCard = () => {
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col">
      <div className="h-[70px] flex justify-between items-center bg-primary text-white w-full p-6">
        <h2>My First Post at CodeLeap Network!</h2>

        {/* Actions */}
        <div className=""></div>
      </div>

      <div className="p-6 rounded-bl-2xl rounded-br-2xl border border-t-[#7695ec] border-[#999999]">
        <div className="mb-4 flex justify-between text-[#999999] text-[18px]">
          <p className="font-bold">@Vinícius Santos</p>

          <p>30 minutes ago</p>
        </div>

        <p className="text-[18px] text-black">
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. <br />{" "}
          <br />
          Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </div>
    </div>
  );
};

export default PostCard;
