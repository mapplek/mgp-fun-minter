import styles from 'styles/operate_nfts.module.css'
import ContainerMint from 'components/container_mint'

export default function OperateNFTs(props) {
    return (
        <div className={styles.container_operate_nfts}>
            <ContainerMint connectedAddress={props.connectedAddress} />
        </div>
    )
}