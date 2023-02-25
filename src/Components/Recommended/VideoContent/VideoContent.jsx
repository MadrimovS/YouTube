import React from "react";

const VideoContent = ({ video, avatar, author, title, date }) => {
	return (
		<div className="video__content cursor-pointer mb-10">
			<div className="video__img">
				<img className="rounded-xl" src={video} alt="" />
			</div>

			<div className="video__desc flex  gap-3 mt-2">
				<div className="video__user">
					<img className="rounded-xl" src={avatar} alt="" />
				</div>

				<div className="video__text w-50">
					<h3 className="font-medium ">{title}</h3>
					<a className="text-sm" href="/">
						{author}
					</a>
					<p className="text-sm">{date}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoContent;