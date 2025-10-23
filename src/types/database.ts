export interface Database {
  public: {
    Tables: {
      yachts: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price_per_day: number;
          year: number;
          length_ft: number;
          draft_ft: number | null;
          location: string;
          cabins: number;
          berths: number;
          guests: number;
          condition: 'Pre-owned' | 'New' | null;
          is_new: boolean;
          video_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['yachts']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['yachts']['Insert']>;
      };
      crew_members: {
        Row: {
          id: string;
          yacht_id: string;
          name: string;
          role: string;
          avatar_url: string | null;
          display_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['crew_members']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['crew_members']['Insert']>;
      };
      reviews: {
        Row: {
          id: string;
          yacht_id: string;
          reviewer_name: string;
          rating: number;
          comment: string;
          review_date: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['reviews']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['reviews']['Insert']>;
      };
      faqs: {
        Row: {
          id: string;
          yacht_id: string;
          question: string;
          answer: string;
          display_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['faqs']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['faqs']['Insert']>;
      };
      yacht_images: {
        Row: {
          id: string;
          yacht_id: string;
          image_url: string;
          is_primary: boolean;
          display_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['yacht_images']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['yacht_images']['Insert']>;
      };
    };
  };
}
