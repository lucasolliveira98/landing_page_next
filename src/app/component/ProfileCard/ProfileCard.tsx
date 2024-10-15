// components/ProfileCard.tsx
'use client'
import ImageDisplay from '../ImageDisplay/ImageDisplay';
import styles from './ProfileCard.module.css'; // Importa o arquivo CSS

interface ProfileCardProps {
  name: string;
  description: string;
  imageUrl: any;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, imageUrl }) => {
  return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <ImageDisplay
                src={imageUrl.src}
                alt={name} 
                shape="circle" 
                size={100}/>
        </div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
  );
};

export default ProfileCard;
