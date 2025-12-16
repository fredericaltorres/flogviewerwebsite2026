// Define types for the metadata structure
export interface BulletPoint {
  text: string;
  video_link?: string | null;
  video_link_2?: string | null;
  image_link?: string | null;
  image_link_2?: string | null;

}

export interface DownloadButton {
  title: string;
}

export interface Feature {
  title: string;
  description: string;
  image_link: string | null;
  code_sample: string | null;
  video_link?: string | null;
}

export interface Option {
  title: string;
  description: string;
  image_link: string | null;
  code_sample: string | null;
  video_link?: string | null;
}

export interface Metadata {
  name: string;
  logo: string;
  overview_header: string;
  overview_image: string;
  overview_bullet_points: BulletPoint[];
  overview_bullet_points_2: BulletPoint[];
  overview_footer: string;
  download_button: DownloadButton;
  features: Feature[];
  options: Option[];
  open_source_libraries: string;
}
