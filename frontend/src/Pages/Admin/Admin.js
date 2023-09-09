import React from 'react'


export default function Admin() {
  return (
    <>
        <main className="main">
		<div className="container-fluid">
			<div className="row">
				{/* <!-- main title --> */}
				<div className="col-12">
					<div className="main__title">
						<h2>Dashboard</h2>

						<a href="add-item.html" className="main__title-link">add item</a>
					</div>
				</div>
				{/* <!-- end main title --> */}

				{/* <!-- stats --> */}
				<div className="col-12 col-sm-6 col-xl-3">
					<div className="stats">
						<span>Total Streams</span>
						<p>5 678</p>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/></svg>
					</div>
				</div>
				{/* <!-- end stats --> */}

				{/* <!-- stats --> */}
				<div className="col-12 col-sm-6 col-xl-3">
					<div className="stats">
						<span>Streams This Month</span>
						<p>172</p>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z"/></svg>
					</div>
				</div>
				{/* <!-- end stats --> */}

				{/* <!-- stats --> */}
				<div className="col-12 col-sm-6 col-xl-3">
					<div className="stats">
						<span>Total Users</span>
						<p>2 573</p>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"/></svg>
					</div>
				</div>
				{/* <!-- end stats --> */}

				{/* <!-- stats --> */}
				<div className="col-12 col-sm-6 col-xl-3">
					<div className="stats">
						<span>Users Registered This Month</span>
						<p>1 021</p>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg>
					</div>
				</div>
				{/* <!-- end stats --> */}

				{/* <!-- dashbox --> */}
				<div className="col-12 col-xl-6">
					<div className="dashbox">
						<div className="dashbox__title">
							<h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6ZM7,12a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V13A1,1,0,0,0,7,12Zm10-2a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,17,10Zm2-8H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"/></svg> Recently Registered Users</h3>

							<div className="dashbox__wrap">
								<a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"/></svg></a>
								<a className="dashbox__more" href="catalog.html">View All</a>
							</div>
						</div>

						<div className="dashbox__table-wrap dashbox__table-wrap--1">
							<table className="main__table main__table--dash">
								<thead>
									<tr>
										<th>ID</th>
										<th>TITLE</th>
										<th>CATEGORY</th>
										<th>RATING</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className="main__table-text">321</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
										</td>
										<td>
											<div className="main__table-text">Movie</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--rate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.2</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="main__table-text">54</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">Benched</a></div>
										</td>
										<td>
											<div className="main__table-text">Movie</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--rate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.1</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="main__table-text">670</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">Whitney</a></div>
										</td>
										<td>
											<div className="main__table-text">TV Show</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--rate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.0</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="main__table-text">241</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">Blindspotting 2</a></div>
										</td>
										<td>
											<div className="main__table-text">TV Show</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--rate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 8.9</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="main__table-text">22</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">Blindspotting</a></div>
										</td>
										<td>
											<div className="main__table-text">TV Show</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--rate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 8.9</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				{/* <!-- end dashbox --> */}

				{/* <!-- dashbox --> */}
				<div className="col-12 col-xl-6">
					<div className="dashbox">
						<div className="dashbox__title">
							<h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z"/></svg>Top Viewed Streams</h3>

							<div className="dashbox__wrap">
								<a className="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z"/></svg></a>
								<a className="dashbox__more" href="catalog.html">View All</a>
							</div>
						</div>

						<div className="dashbox__table-wrap dashbox__table-wrap--2">
							<table className="main__table main__table--dash">
								<thead>
									<tr>
										<th>ID</th>
										<th>TITLE</th>
										<th>CATEGORY</th>
										<th>STATUS</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className="main__table-text">26</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
										</td>
										<td>
											<div className="main__table-text">Movie</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--green">Visible</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="main__table-text">25</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">Benched</a></div>
										</td>
										<td>
											<div className="main__table-text">Movie</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--green">Visible</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="main__table-text">24</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">Whitney</a></div>
										</td>
										<td>
											<div className="main__table-text">TV Show</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--green">Visible</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="main__table-text">23</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">Blindspotting 2</a></div>
										</td>
										<td>
											<div className="main__table-text">TV Show</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--green">Visible</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="main__table-text">22</div>
										</td>
										<td>
											<div className="main__table-text"><a href="#">Blindspotting</a></div>
										</td>
										<td>
											<div className="main__table-text">TV Show</div>
										</td>
										<td>
											<div className="main__table-text main__table-text--green">Visible</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				{/* <!-- end dashbox --> */}

			
			</div>
		</div>
	</main>
    </>
  )
}
