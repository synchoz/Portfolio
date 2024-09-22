function DownloadButton() {
    return(
        <div className="text-lg font-rubik px-6 py-2 w-fit text-white resumeBtn hover:duration-700 hover:ease-out transition ease-out">
            <a href="/Dima Vorobiov.docx" download={true}>Resume</a>
        </div>
    )
}

export default DownloadButton;