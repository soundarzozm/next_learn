import {useRouter} from 'next/router'

function SelectedClientProjectPage() {

    const router = useRouter()
    console.log(router.query)

    return<>The Project Page for {router.query.clientprojectid} of {router.query.id}</>
}

export default SelectedClientProjectPage