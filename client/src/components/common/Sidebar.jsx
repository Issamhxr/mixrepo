

import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Sidebar = () => {
	const queryClient = useQueryClient();
	const { mutate: logout } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch("/api/auth/logout", {
					method: "POST",
				});
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
		onError: () => {
			toast.error("Logout failed");
		},
	});
	const { data } = useQuery({ queryKey: ["authUser"] });
	//theme change toggle function


	return (
		<div className='md:flex-[2_2_0] md:h-[630] pt-3 min-w-2xl z-1 h-[calc(100vh - 64)] overflow-clip ' >
			
			<div className=' lef2-0 flex flex-col sm:w-1/6 sm:max-w-md '>
				
				<ul className='flex flex-col gap-3 mt-2'>
					<li className='flex justify-center  md:justify-start'>
						<Link
							to='/'
							className='flex gap-3 items-center btn btn-ghost rounded-lg  transition-all duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							
							<svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6 w-6">
 								 <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
							</svg>
							<span className='text-lg hidden md:block'>Home</span>
						</Link>
					</li>
					<li className='flex justify-center md:justify-start'>
						<Link
							to='/notifications'
							className='flex gap-3 items-center btn btn-ghost rounded-lg transition-all duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<svg className="h-6 w-6" dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
							</svg>
							<span className='text-lg hidden md:block'>Notifications</span>
						</Link>
					</li>
					

					<li className='flex justify-center md:justify-start'>
						<Link
							to={`/profile/${data?.username}`}
							className='flex gap-3 items-center  transition-all  duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer btn btn-ghost rounded-xl'
						>
							<svg className="h-6 w-6" dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
							</svg>
							<span className='text-lg hidden md:block'>Profile</span>
						</Link>
					</li>
					<li className='flex justify-center md:justify-start'>
					<Link
					to='/messages'  //needs some modification TODO
					className='flex gap-3 items-center btn btn-ghost rounded-lg transition-all duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
				        >
						<svg className="h-6 w-6" dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
					</svg>
							<span className='text-lg hidden md:block'>Inbox</span>
						</Link>
					</li>
					
					<li className="flex justify-center md:justify-start">
						<Link
							to="/group"
							className="flex gap-3 items-center btn btn-ghost rounded-lg transition-all duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
						>
							<svg
							className="h-6 w-6"
							dataSlot="icon"
							fill="none"
							strokeWidth={1.5}
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17 20h5v-1a4 4 0 00-4-4h-1a4 4 0 00-4 4v1h5zM9 20h5v-1a4 4 0 00-4-4H9a4 4 0 00-4 4v1h5zM16 12a4 4 0 100-8 4 4 0 000 8zM9 16a4 4 0 100-8 4 4 0 000 8z"
							/>
							</svg>
							<span className="text-lg hidden md:block">groups</span>
						</Link>
					</li>
				</ul>
				
				{data && (
					<Link
						to={`/profile/${data.username}`}
						className=' mt-80 mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#181818] py-2 px-4 rounded-full'
					>
						<div className='avatar hidden md:inline-flex'>
							<div className='w-8 rounded-full'>
								<img src={data?.profileImg || "/avatar-placeholder.png"} />
							</div>
						</div>
						<div className='flex justify-between flex-1'>
							<div className='hidden md:block'>
								<p className='text-white font-bold text-sm w-20 truncate'>{data?.fullName}</p>
								<p className='text-slate-500 text-sm'>@{data?.username}</p>
							</div>
							<BiLogOut className='w-5 h-5 cursor-pointer' 
							onClick={(e) => {
								e.preventDefault();
								logout();
							} }
							/>
							
						</div>
					</Link>
				)}
			</div>
			
		</div>
	);
};
export default Sidebar;
