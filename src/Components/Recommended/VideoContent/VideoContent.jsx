import React from "react";

const VideoContent = ({ video, avatar, author, title, date, favouriteIcon }) => {
	return (
		<div className="video__content cursor-pointer mb-10">
			<div className="video__img">
				<img className="rounded-xl w-60" src={video} alt="img" />
			</div>

			<div className="video__desc flex  gap-3 mt-2">
				<div className="video__user">
					<img className="rounded-xl" src={avatar} alt="" />
				</div>

				<div className="video__text w-50">
					<div className="flex items-center justify-between">
						<h3 className="font-medium ">{title}</h3>
						{/* <img className="w-5 hover:marker:bg-gray-900 " src={favouriteIcon} alt="" /> */}
					</div>

					<p className="text-sm w-48">{author}</p>
					<p className="text-sm">{date}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoContent;
